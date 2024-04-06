import { config } from '@/api/apiconfig'
import { Decrypt, Encrypt } from '@/modules/shared/sharedFunctions'
const sql = require('mssql')
const jwt = require('jsonwebtoken')
const apikey = process.env.NEXT_PUBLIC_API_KEY
const accesskey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY


export async function ExecuteRecordsetQry(qry){
    return new Promise((resolve, reject) => {
        let response = (e, m) => { return { error: e, message: m } }

        sql.connect(config, (err) => {
            if(err) reject(response(true, err))

            const req = new sql.Request()

            req.query(qry, (err, recset) => {
                if(err) reject(response(true, err))

                resolve(response(false, recset))
            })
        })
    })
}

export default function handler(req, res){
    const { key, user, pw } = req.body

    if(key === apikey){
        const qry =
        `
        SELECT TOP 1
        acc.uid,
        acc.password AS dbpw,
        info.first_name AS fname,
        info.last_name AS lname,
        info.role AS role
        FROM user_accounts AS acc
        INNER JOIN user_info AS info ON acc.uid = info.uid
        WHERE username = '${user}'
        `

        return new Promise((resolve, reject) => {
            ExecuteRecordsetQry(qry)
            .then(({ message, error }) => {
                const { dbpw, fname, lname, role, uid } = message.recordset[0]
                const uipass = Decrypt(pw, process.env.NEXT_PUBLIC_ENCRYPT_KEY)
                const dbpass = Decrypt(dbpw, process.env.NEXT_PUBLIC_ENCRYPT_KEY)

                if(uipass === dbpass){
                    const signed = jwt.sign(
                        { user: { fname: fname, lname: lname, role: role, uid: uid } }, 
                        accesskey, 
                        { expiresIn: '15s' }
                    )
                    res.send({ error: error, signed: signed, role: role })
                    resolve()
                }
                else{
                    res.send({ error: true })
                    reject()
                }
            })
            .catch((err) => {
                console.log(err);
                res.send({ error: true })
                reject()
            })
        })
        
        // res.json({ error: false, access: accessToken })
    }
    else res.json({ error: true })
}
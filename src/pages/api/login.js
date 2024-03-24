import { config } from '@/misc/apiconfig'
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
        SELECT * FROM user_accounts
        `

        ExecuteRecordsetQry(qry)
        .then(({ message, error }) => {
            res.json({ error: error, message: message.recordset })
        })
        .catch((err) => {
            console.log(err);
            res.json({ error: true })
        })
        const accessToken = jwt.sign({ user: user }, accesskey)
        // res.json({ error: false, access: accessToken })
    }
    else res.json({ error: true })
}
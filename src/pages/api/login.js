import { Decrypt, Encrypt } from '@/modules/shared/sharedFunctions'
import { ExecuteQry, ExecuteRecordsetQry, generateToken } from '.'
import { NextResponse } from 'next/server'
const sql = require('mssql')
const jwt = require('jsonwebtoken')
const apikey = process.env.NEXT_PUBLIC_API_KEY
const accesskey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY
const refreshkey = process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY


export default function handler(req, res){
    const { key, user, pw } = req.body
    const response = NextResponse.next()

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
                if(error){
                    res.send({ error: true })
                    reject()
                }

                const { dbpw, fname, lname, role, uid } = message.recordset[0]
                const uipass = Decrypt(pw, process.env.NEXT_PUBLIC_ENCRYPT_KEY)
                const dbpass = Decrypt(dbpw, process.env.NEXT_PUBLIC_ENCRYPT_KEY)

                if(uipass === dbpass){
                    const user = { user: { fname: fname, lname: lname, role: role, uid: uid } }
                    const at = generateToken(user, '60s').at()
                    const rt = generateToken(user).rt()
                    const rtQry = `INSERT INTO refresh_tokens(token) VALUES('${rt}')`

                    ExecuteQry(rtQry)
                    .then(({ error }) => {
                        const body = { error: error, signed: at, rt: rt, role: role }
                        // response.cookies.set('uinf', at)
                        res.send(body)
                        resolve()
                    })
                    .catch(err => {
                        console.log(err)
                        res.send({ error: true })
                        reject()
                    })
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
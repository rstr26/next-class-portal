const sql = require('mssql')
const jwt = require('jsonwebtoken')
const accesskey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY
const refreshkey = process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY
import { config } from '@/api/apiconfig'


export function generateToken(user, duration){
    const d = duration || '5s'

    // Access Token
    function at(){
        return jwt.sign(user, accesskey)
    }

    // Refresh Token
    function rt(){
        return jwt.sign(user, accesskey)
    }

    return { at: at, rt: rt }
}

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

export async function ExecuteQry(qry){
    return new Promise((resolve, reject) => {
        let response = (e, m) => { return { error: e, message: m } }

        sql.connect(config, (err) => {
            if(err) reject(response(true, err))

            const req = new sql.Request()

            req.query(qry, (err) => {
                if(err) reject(response(true, err))

                resolve(response(false, 'Query executed successfully!'))
            })
        })
    })
}

export default function handler(req, res){

    const html =
    `
    <!DOCTYPE html>
        <head>
        </head>
        <body>
            <div style='display: flex; justify-content: center'>
                <h1>GREETINGS! THIS IS NEXT CLASS PORTAL API.</h1>
            <div>
        </body>
    </html
    `

    res.send(
        `${html}`
    )
}
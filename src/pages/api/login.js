const jwt = require('jsonwebtoken')
const apikey = process.env.NEXT_PUBLIC_API_KEY
const accesskey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY

export default function handler(req, res){
    const { key, user, pw } = req.body

    if(key === apikey){
        const accessToken = jwt.sign({ user: user }, accesskey)
        res.json({ error: false, access: accessToken })
    }
    else res.json({ error: true })
}
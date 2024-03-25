import { VerifyToken } from '@/misc/apiconfig'

const jwt = require('jsonwebtoken')


export default function handler(req, res) {
    const { user } = req.query
    // res.status(200).json({ name: user });

    if(user === 'test') login(req, res)
    else if(user === 'validate') console.log(VerifyToken(req, res));

    res.send({ error: false })
}

function login(req, res){
    console.log(req.query);
    res.status(200).json({ name: 'test1' })
}
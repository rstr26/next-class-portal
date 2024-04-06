import { VerifyToken } from '@/api/verifytoken';


export default function handler(req, res) {
    const { user } = req.query
    // res.status(200).json({ name: user });

    if(user === 'test') login(req, res)
    else if(user === 'validate'){
        const { error, code } = VerifyToken(req)
        if(error && code === 'tokexp'){
            res.status(401)
        }
    }

    res.send({ error: false })
}

function login(req, res){
    console.log(req.query);
    res.status(200).json({ name: 'test1' })
}
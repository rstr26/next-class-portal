export default function handler(req, res) {
    const { user } = req.query
    // res.status(200).json({ name: user });

    if(user === 'test') login(req, res)
}

function login(req, res){
    console.log(req.query);
    res.status(200).json({ name: 'test1' })
}
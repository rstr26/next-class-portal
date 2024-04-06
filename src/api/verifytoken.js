const accesskey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY
const jwt = require('jsonwebtoken')

/** Validate Access Token 
 * @param {object} req request object
*/
export function VerifyToken(req){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    const verified = jwt.verify(token, accesskey, (err, user) => {
        if(err){
            if(err.name === 'TokenExpiredError'){
                return { error: true, code: 'tokexp' }
            }

            return { error: true, code: 'na' }
        }
        
        return { ...user, error: false, code: 'ok' }
    })

    return verified
}
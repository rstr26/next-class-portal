const env = process.env.NEXT_PUBLIC_ENVIRONMENT
const accesskey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY
const jwt = require('jsonwebtoken')

/** API base URL */
export function ApiURL(){
    if(env === 'PRODUCTION') return 'http://localhost:3000/api'
    else return 'http://localhost:3000/api'
}


/** Header config for axios API request
 * @param {string} type json | media, default is json
 * @param {string} token for token verification
 */
export function HeaderConfig(type, token){
    let val = ''

    if(!type || type === 'json'){
        val = 'application/json'
    }
    else if(type === 'media'){
        val = 'multipart/form-data'
    }

    return {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': val
        }
    }
}


/** MS SQL database connection config */
export const config = {
    server: 'LAPTOP-QH8MA6C7',
    database: 'next_class_portal_test',
    user: 'nextapi',
    password: 'nextapi',
    options: {
        trustServerCertificate: true
    }
}


/** Validate Access Token */
export function VerifyToken(req, res){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    const verified = jwt.verify(token, accesskey, (err, user) => {
        if(err){
            console.log(err.expiredAt);
            return { error: true }
        }
        
        return { ...user, error: false }
    })

    return verified
}

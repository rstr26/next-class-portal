const env = process.env.NEXT_PUBLIC_ENVIRONMENT
const key = process.env.NEXT_PUBLIC_API_KEY


/** API base URL */
export function ApiURL(){
    if(env === 'PRODUCTION') return 'http://localhost:3000/api'

    else if(env === 'STAGING') return 'http://localhost:3000/api'
    
    else return 'http://192.168.1.3:3000/api'
}


/** Header config for axios API request
 * @param {string} token for token verification
 * @param {string} type json | media, default is json
 */
export function HeaderConfig(token, type){
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

/** Body config for axios API request 
 * @param {object} body other payload object
 * @param {boolean} refreshable pass true to allow refresh token if access token expires, false by default
*/
export function BodyConfig(body, refreshable){
    const r = refreshable || false
    
    return {
        key: key,
        allowRt: r,
        ...body
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

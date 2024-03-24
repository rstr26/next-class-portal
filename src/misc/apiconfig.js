const env = process.env.NEXT_PUBLIC_ENVIRONMENT

/** API base URL */
export function ApiURL(){
    if(env === 'PRODUCTION') return 'http://localhost:3000/api'
    else return 'http://localhost:3000/api'
}


/** Header config for axios API request
 * @param {string} type json | media, default is json
 */
export function HeaderConfig(type){
    let val = ''

    if(!type || type === 'json'){
        val = 'application/json'
    }
    else if(type === 'media'){
        val = 'multipart/form-data'
    }

    return {
        'Content-Type': val
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

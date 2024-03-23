const env = process.env.NEXT_PUBLIC_ENVIRONMENT

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
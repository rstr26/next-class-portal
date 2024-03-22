const env = process.env.NEXT_PUBLIC_ENVIRONMENT

export function ApiURL(){
    if(env === 'PRODUCTION') return 'http://localhost:3000/api'
    else return 'http://localhost:3000/api'
}
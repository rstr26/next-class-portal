import axios from "axios"
import { ApiURL, HeaderConfig } from "../apiconfig"

const key = process.env.NEXT_PUBLIC_API_KEY
let body = {}

export async function Login(credentials){
    body = {
        key: key,
        ...credentials
    }

    const res = await axios.post(`${ApiURL()}/login`, body, HeaderConfig())
    .then((res) => res)
    .catch((err) => { return { data: err } })

    return res
}
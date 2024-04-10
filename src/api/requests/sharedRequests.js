import axios from "axios"
import { ApiURL, BodyConfig, HeaderConfig } from "../apiconfig"

const key = process.env.NEXT_PUBLIC_API_KEY
let body = {}

export async function Login(credentials){

    const res = await axios.post(`${ApiURL()}/login`, BodyConfig(credentials), HeaderConfig())
    .then((res) => res)
    .catch((err) => { return { data: err } })

    return res
}
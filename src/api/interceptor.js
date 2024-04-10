import axios from "axios"
import { ApiURL } from "./apiconfig"
import Cookies from "js-cookie"

const api = axios.create({
    baseURL: ApiURL()
})

api.interceptors.response.use(
    response => response,
    error => {
        if(error.response.status === 403) handleExpiredToken()
        return Promise.reject(error)
    }
)

function handleExpiredToken(){
    // Object.keys(Cookies.get()).forEach(cookie => Cookies.remove(cookie))
    window.alert('Session expired, please login again')
    window.location.href = '/'
}

export default api
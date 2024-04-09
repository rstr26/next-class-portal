import axios from "axios"
import { ApiURL } from "./apiconfig"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

const api = axios.create({
    baseURL: ApiURL()
})

api.interceptors.response.use(
    response => response,
    error => {
        if(error.response.status === 401) handleExpiredToken()
        return Promise.reject(error)
    }
)

function handleExpiredToken(){
    console.log('entered expired handler');
    Object.keys(Cookies.get()).forEach(cookie => Cookies.remove(cookie))
    // toast.info('Session expired, please login again.')
    window.alert('Session expired, please login again')
    window.location.href = '/'
}

export default api
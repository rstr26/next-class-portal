"use client"
import React, { useEffect } from 'react'
import useStore from './SharedState'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const ProtectedRoute = ({ children }) => {

    const store = useStore()
    const router = useRouter()
    const token = Cookies.get('uinf')
    const { setUserId } = store

    // check if token cookie is existent, returns true if passed, false if token is not found
    function hasToken(){
        if(!token) return false
        return true
    }


    useEffect(() => {
        if(!hasToken()){
            toast.error('Session not found, please login again.')
            router.push('/')
        }
    }, [])

    return(
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default ProtectedRoute
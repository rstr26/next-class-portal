import useStore from '@/modules/shared/SharedState'
import Button from '@/modules/shared/tailwind-components/Button'
import React from 'react'
import Cookies from 'js-cookie'
import api from '@/api/interceptor'
import axios from 'axios'
const jwt = require('jsonwebtoken')

const Instructor = () => {

    const store = useStore()
    const token = Cookies.get('uinf') || ''
    const tkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || ''
    const { userid, setUserId } = store

    async function verifytoken(){
        await api.post('/users/validate', null, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(res => console.log(res))
        .catch(err => {
            if(!err.response.status === 401){
                console.log(err);
            }
        })
    }

    return (
        <>
            <div>Youre on Instructor Homepage {userid}</div>
            <Button 
                text='Click Me'
                onClick={verifytoken}
            />
        </>
    )
}

export default Instructor
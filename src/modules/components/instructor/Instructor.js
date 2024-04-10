import useStore from '@/modules/shared/SharedState'
import Button from '@/modules/shared/tailwind-components/Button'
import React from 'react'
import Cookies from 'js-cookie'
import api from '@/api/interceptor'

const Instructor = () => {

    const store = useStore()
    const tkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || ''
    const { userid, setUserId } = store

    // REQUEST
    async function rtNotAllowed(){
        const token = Cookies.get('uinf') || ''
        await api.post('/users/rt', null, { headers: { 'Authorization': `Bearer ${token}` } })
        .then(res => console.log(res))
        .catch(err => {
            if(!err.response.status === 403){
                console.log(err);
            }
        })
    }

    async function rtAllowed(){

    }

    return (
        <>
            <div>Youre on Homepage</div>
            <Button 
                text='test1'
                onClick={rtNotAllowed}
            />
            <Button 
                text='test2'
                // onClick={}
            />
        </>
    )
}

export default Instructor
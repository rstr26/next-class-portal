import useStore from '@/modules/shared/SharedState'
import Button from '@/modules/shared/tailwind-components/Button'
import React from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
const jwt = require('jsonwebtoken')

const Instructor = () => {

    const store = useStore()
    const token = Cookies.get('uinf') || ''
    const tkey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || ''
    const { userid, setUserId } = store

    async function verifytoken(){
        // jwt.verify(token, tkey, (err, user) => {
        //     if(err) console.log('error');

        //     console.log(user);
        // })

        // console.log(jwt.sign({ name: 'rester' }), tkey);
        await axios.post('http://localhost:3000/api/users/validate', null, { headers: { 'Authorization': `Bearer ${token}` } })
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
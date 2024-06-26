import { Login } from '@/api/requests/sharedRequests'
import { Decrypt, Encrypt } from '@/modules/shared/sharedFunctions'
import Button from '@/modules/shared/tailwind-components/Button'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { Slide, toast, ToastContainer } from 'react-toastify'

const LogInUI = () => {

    const router = useRouter()
    const ekey = process.env.NEXT_PUBLIC_ENCRYPT_KEY
    const [credentials, setCredentials] = useState({ user: '', pw: '' })
    const toastId = useRef(null)

    async function submit(){
        const data = await Login(credentials)

        toastId.current = toast.loading('Logging in...')
        if(!data.data.error){
            toast.success('Login successful')
            Cookies.set('uinf', data.data.signed)
            router.replace(`/${data.data.role}`)
        }
        else{
            toast.error('Login failed.')
        }
        toast.done(toastId.current)
    }

    return (
        <div className='flex'>
            <div className='w-full sm:w-2/5 bg-primary h-screen flex justify-center items-center'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h1 className='text-white font-bold text-4xl mb-2'>Login</h1>
                    <p className='text-xs text-white mb-6'>Enter your credentials below.</p>

                    <p className='text-white'>Username</p>
                    <input 
                        className='outline-none bg-transparent border-b-2 text-white text-xl' 
                        onChange={(e) => setCredentials({...credentials, user: e.target.value})}
                    />
                    <p className='text-white mt-5'>Password</p>
                    <input 
                        className='outline-none bg-transparent border-b-2 text-white text-xl' 
                        type='password' 
                        onChange={(e) => setCredentials({...credentials, pw: Encrypt(e.target.value, ekey)})}
                    />

                    <Button 
                        text='Login' 
                        type='secondary' 
                        size='md' fluid 
                        style={{ marginTop: '20px' }}
                        icon={<ArrowLeftStartOnRectangleIcon />}
                        onClick={submit}
                    />
                    <a className='text-white text-xs font-body underline' href=''>Sign up for an account.</a>
                </form>
            </div>

            <div className='w-0 sm:w-3/5 sm:flex hidden relative justify-center'>
                <div className='absolute top-28'>
                    <h1 
                        className='text-3xl font-bold font-body'
                    >
                        Welcome to School Portal!
                    </h1>
                    <p>Log in to access your account</p>
                </div>
                <Image 
                    src={'/5251.jpg'} 
                    width={500} 
                    height={500}
                    title='Image by pch.vector on Freepik'
                    className='absolute top-44'
                    alt='Students vector'
                    priority
                />
            </div>
        </div>
    )
}

export default LogInUI
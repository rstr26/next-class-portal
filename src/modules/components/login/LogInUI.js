import Button from '@/modules/shared/tailwind-components/Button'
import Input from '@/modules/shared/tailwind-components/Input'
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const LogInUI = () => {
    return (
        <div className='flex'>
            <div className='w-2/5 bg-primary h-screen flex justify-center items-center'>
                <form>
                    <h1 className='text-white font-bold text-4xl mb-2'>Login</h1>
                    <p className='text-xs text-white mb-6'>Enter your credentials below.</p>

                    <p className='text-white'>Username</p>
                    <input className='outline-none bg-transparent border-b-2 text-white text-xl' />
                    <p className='text-white mt-5'>Password</p>
                    <input className='outline-none bg-transparent border-b-2 text-white text-xl' type='password' />

                    <Button 
                        text='Login' 
                        type='secondary' 
                        size='md' fluid 
                        style={{ marginTop: '20px' }}
                        icon={<ArrowLeftStartOnRectangleIcon />}
                    />
                    <a className='text-white text-xs font-body underline' href=''>Sign up for an account.</a>
                </form>
            </div>

            <div className='w-3/5 relative flex justify-center'>
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
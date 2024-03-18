import Image from 'next/image'
import React from 'react'

const LogInUI = () => {
    return (
        <div className='flex'>
            <div className='flex-1 bg-primary h-screen'>
                <h1>Log In</h1>
            </div>

            <div className='flex-1 relative flex justify-center'>
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
                />
            </div>
        </div>
    )
}

export default LogInUI
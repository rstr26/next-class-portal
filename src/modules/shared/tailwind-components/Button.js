import clsx from 'clsx'
import React, { useEffect } from 'react'
import { TailwindUtils } from '../sharedFunctions'

const Button = ({ text, size, inverted, icon, type, onClick }) => {
    const combinedClasses = clsx(
        {
            'flex items-center rounded-md my-2 py-1 px-3 font-sm transition duration-300 text-white':
            !inverted,
            'flex items-center border-2 rounded-md my-2 py-1 px-3 font-sm transition duration-300': 
            inverted
        }, 
        {
            [TailwindUtils('size', {size: size})]: true,
            [TailwindUtils('inverted btn border', { inverted: inverted, size: size })]: true,
            [TailwindUtils('bg', { bg: type })]: !inverted && true,
            [TailwindUtils('hover bg', { bg: type })]: true,
            'hover:text-white': inverted
        }
    )


    return (
        <button 
            className={combinedClasses}
            onClick={onClick}
        >
            <div className='w-5 h-5 mr-1'>
                {icon && icon}
            </div>
            {text}
        </button>
    )
}

export default Button
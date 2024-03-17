import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { InputValidation, TailwindUtils } from '../sharedFunctions'
import { UserPlusIcon } from '@heroicons/react/24/outline'

const Input = ({ placeholder, label, size, type, max, min, validation, value, content, icon, button }) => {
    
    const [inputVal, setInputVal] = useState('')

    const conditionObj = {
        text: inputVal, 
        negative: validation && validation.min,
        warning: validation && validation.warn, 
        positive: validation && validation.max
    }
    const baseClass = 'border-2 p-1 font-medium outline-none rounded-md'
    const labelCombinedClasses = clsx(
        'ml-1 font-medium',
        { [TailwindUtils('size', { size: size })]: true }
    )
    const iconCombinedClasses = clsx(
        'absolute text-gray-500',
        {
            'left-[142px] top-[6px] w-4 h-4': size === 'xs',
            'left-44 top-[8px] w-5 h-5': size === 'md',
            'left-[196px] top-[8px] w-6 h-6': size === 'lg',
            'left-56 top-[4px] w-7 h-7': size === 'xl',
            'cursor-pointer': icon && button
        }
    )
    const combinedClasses = clsx(
        baseClass,
        {
            [TailwindUtils('size', { size: size })]: true,
            [TailwindUtils('border validation', { num: InputValidation(validation && validation.type, conditionObj) })]: validation && true
        }
    )

    useEffect(() => {
        content && content(inputVal)
    }, [inputVal])

    return (
        <div className='flex-row'>
            <div>
                {label && <span className={labelCombinedClasses}>{label}</span>}
            </div>
            <div className='flex relative'>
                <input 
                    className={combinedClasses}
                    placeholder={placeholder}
                    onChange={(e) => setInputVal(e.target.value)}
                    value={value}
                />
                
                <div className={iconCombinedClasses} onClick={() => { icon && button && button() }}>
                    {icon && icon}
                </div>
            </div>
        </div>
    )
}

export default Input
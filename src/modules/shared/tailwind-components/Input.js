import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { InputValidation, TailwindUtils } from '../sharedFunctions'
import { UserPlusIcon } from '@heroicons/react/24/outline'

const Input = ({ placeholder, label, size, type, max, min, validation, value, content }) => {
    
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
            <div className='relative flex'>
                <input 
                    className={combinedClasses}
                    placeholder={placeholder}
                    onChange={(e) => setInputVal(e.target.value)}
                    value={value}
                />
                <UserPlusIcon className='w-5 h-5 absolute self-end left-2 top-1/2 transform -translate-y-1/2' />
            </div>
        </div>
    )
}

export default Input
import React from 'react'
import clsx from 'clsx'
import { TailwindUtils } from '../sharedFunctions'

const Input = ({ placeholder, label, size, type, max, min, validation }) => {

    const baseClass = 'border-2 p-1 font-medium outline-none rounded-md'
    const combinedClasses = clsx(
        baseClass,
        {
            [TailwindUtils('size', size)]: true
        }
    )

    // `border-2 border-positive p-1 text-${s} font-medium outline-none rounded-md`
    return (
        <div className='flex-row'>
            <div>
                {label && <span className={`text-xs font-medium ml-1`}>{label}</span>}
            </div>
            <div>
                <input 
                    className={combinedClasses}
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default Input
import React from 'react'

const Input = ({ placeholder, label, size, type, max, min }) => {

    const s = size || 'xs'
    function utility(){
        return ``
    }

    console.log(s);
    return (
        <div className='flex-row'>
            <div>
                {label && <span className={`text-${s} font-medium ml-1`}>{label}</span>}
            </div>
            <div>
                <input 
                    className={
                        `border-2 border-positive p-1 text-${s} font-medium outline-none rounded-md`
                    }
                    placeholder={placeholder}
                />
            </div>
        </div>
    )
}

export default Input
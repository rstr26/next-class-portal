import React from 'react'

const Button = ({ text, size, inverted, icon, type }) => {
    const s = size || 'sm'
    const t = type || 'primary'


    function utility(){
        let util = ''
        if(inverted) util = `flex items-center text-${s} border-2 border-${t} text-${t} rounded-md my-2 py-1 px-3 font-sm
        transition duration-200 hover:border-${t}Dark hover:text-${t}Dark`

        else util = `flex items-center text-${s} bg-${t} rounded-md my-2 py-1 px-3 font-sm transition duration-200
        hover:bg-${t}Dark text-white`

        console.log(util);
        return util
    }

    return (
        <button 
            className={utility()}
        >
            {icon && React.cloneElement(icon, { className: 'w-5 h-5 mr-1' })}
            {text}
        </button>
    )
}

export default Button
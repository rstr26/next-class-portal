import clsx from 'clsx'
import React from 'react'

const Button = ({ text, size, inverted, icon, type }) => {
    const combinedClasses = clsx(
        {
            'flex items-center rounded-md my-2 py-1 px-3 font-sm transition duration-200 text-white':
            !inverted,
            'flex items-center border-2 rounded-md my-2 py-1 px-3 font-sm transition duration-200': 
            inverted
        }, 
        {
            'text-xs': !size || size === 'xs',
            'text-sm': size === 'sm',
            'text-md': size === 'md',
            'text-lg': size === 'lg',
            'border-0': !inverted,
            'border-sm': inverted && (size === 'xs' || size === 'sm'),
            'border-md': inverted && size === 'md',
            'border-lg': inverted && size === 'lg',
            'bg-primary': !inverted && (!type || type) === 'primary',
            'bg-secondary': !inverted && type === 'secondary',
            'bg-positive': !inverted && type === 'positive',
            'bg-negative': !inverted && type === 'negative',
            'bg-neutral': !inverted && type === 'neutral',
            'hover:bg-primaryDark': !type || type === 'primary',
            'hover:bg-secondaryDark': type === 'secondary',
            'hover:bg-positiveDark': type === 'positive',
            'hover:bg-negativeDark': type === 'negative',
            'hover:bg-neutralDark': type === 'neutral',
            'hover:text-white': inverted
        }
    )

    return (
        <button 
            className={combinedClasses}
        >
            {icon && React.cloneElement(icon, { className: 'w-5 h-5 mr-1' })}
            {text}
        </button>
    )
}

export default Button
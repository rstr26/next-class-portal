import clsx from 'clsx'
import React, { useEffect } from 'react'
import { TailwindUtils } from '../sharedFunctions'
import PropTypes from 'prop-types'

const Button = ({ text, size, inverted, icon, type, onClick, fluid, style }) => {
    const combinedClasses = clsx(
        {
            'flex justify-center items-center rounded-md my-2 py-1 px-3 font-sm transition duration-300 text-white':
            !inverted,
            'flex justify-center items-center border-2 rounded-md my-2 py-1 px-3 font-sm transition duration-300': 
            inverted
        }, 
        {
            [TailwindUtils('size', {size: size})]: true,
            [TailwindUtils('inverted btn border', { inverted: inverted, size: size })]: true,
            [TailwindUtils('bg', { bg: type })]: !inverted && true,
            [TailwindUtils('hover bg', { bg: type })]: true,
            'w-full': fluid,
            'hover:text-white': inverted
        }
    )
    const iconClasses = clsx(
        'w-5 h-5 mr-1',
        {
            'hidden': !icon
        }
    )


    return (
        <button 
            className={combinedClasses}
            onClick={onClick}
            style={style}
        >
            <div className={iconClasses}>
                {icon && icon}
            </div>
            <div className='font-body'>
                {text}
            </div>
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    inverted: PropTypes.bool,
    icon: PropTypes.element,
    type: PropTypes.oneOf(['primary', 'secondary', 'positive', 'negative', 'neutral']),
    onClick: PropTypes.func,
    fluid: PropTypes.bool,
    style: PropTypes.object
}

export default Button
import React from 'react'

const Container = ({ children, style, flex }) => {
    return (
        <div className={`p-3 ${flex ? 'flex' : ''}`} style={style}>
            {children}
        </div>
    )
}

export default Container
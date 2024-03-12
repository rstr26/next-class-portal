import React from 'react'
import useStore from './SharedState'

const ProtectedRoute = ({ children }) => {

    const store = useStore()
    const { setUserId } = store

    // console.log(setUserId);
    return(
        <React.Fragment>
            {children}
            <button onClick={() => setUserId('test 2')}>Click me</button>
        </React.Fragment>
    )
}

export default ProtectedRoute
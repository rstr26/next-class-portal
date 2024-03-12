import useStore from '@/modules/shared/SharedState'
import React from 'react'

const Instructor = () => {

    const store = useStore()
    const { userid, setUserId } = store

    return (
        <div>Youre on Instructor Homepage {userid}</div>
    )
}

export default Instructor
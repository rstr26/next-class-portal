"use client"
import React from 'react'
import { useRouter } from 'next/router'
import ProtectedRoute from '@/modules/shared/ProtectedRoute'
import Instructor from '@/modules/components/instructor/Instructor'
import Student from '@/modules/components/student/Student'

const index = () => {
    const router = useRouter()
    const { role } = router.query

    function component(){
        if(role === 'instructor'){
            return <Instructor />
        }
        else if(role === 'student'){
            return <Student />
        }
    }

    return(
        <ProtectedRoute>
            {component()}
        </ProtectedRoute>
    )
}

export default index
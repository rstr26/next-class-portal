import React from 'react'
import { useRouter } from 'next/router'
import ComponentSelector from '@/modules/shared/ComponentSelector'
import ProtectedRoute from '@/modules/shared/ProtectedRoute'

const index = () => {
    const router = useRouter()
    const { role } = router.query

    return(
        <ProtectedRoute>
            <ComponentSelector module={role} />
        </ProtectedRoute>
    )
}

export default index
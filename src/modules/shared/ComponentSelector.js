"use client"
import React from 'react'
import Instructor from '../components/instructor/Instructor'
import Student from '../components/student/Student'

/** Returns component for dynamic pages */
const ComponentSelector = ({ module, route }) => {

    if(module === 'instructor'){
        if(route === 'profile') return null
        else return <Instructor />
    }
    else if(module === 'student'){
        if(route === 'profile') return null
        else return <Student />
    }
}

export default ComponentSelector
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const PrivateRoute = ({children}) => {
    const {token}=useAuth();
    if(token!==null)
        return children
    else
        return <Navigate to='/'/>
}

export default PrivateRoute
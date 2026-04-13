import React from 'react';
import { Navigate} from 'react-router-dom';

export default function ProtectedRoutes({children}) { 
    const token = sessionStorage.getItem('accessToken');

    if(!token) {
        return <Navigate to='/' replace/>
    }

    return children;
}
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loader from '../layout/Loader';

const ProtectedRoute = ({children,admin}) => {
    const{isAuthenticated,user,loading}=useSelector((state)=>state.auth);

    if(loading){
        return <Loader></Loader>
    }

    if(!isAuthenticated){
        return <Navigate to="/login" replace></Navigate>
    }

    if(admin && user?.role!=='admin' ){
        return <Navigate to="/" replace></Navigate>
    }

    return children;

}

export default ProtectedRoute

import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {


    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h1> loading</h1>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate >
    }
    return children;

};

export default PrivateRouter;
import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const location=useLocation();
    //console.log(location);
    const {user,loading}=use(AuthContext);
    if(loading){
        return <span className="loading loading-spinner text-success"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
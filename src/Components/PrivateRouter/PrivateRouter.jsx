import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user}=use(AuthContext);
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRouter;
import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const AuthProvider = ({children}) => {
    const createUser=(email,password)=>{
          return createUserWithEmailAndPassword(auth,email,password);
    }
    const AuthInfo={
       createUser,
    }
    return (
        <div>
            <AuthContext value={AuthInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;
import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const AuthProvider = ({children}) => {
    const createUser=(email,password)=>{
          return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    // current user information
    onAuthStateChanged(auth,(currentUser=>{
             if(currentUser){
                 console.log('inside observer',currentUser);
             }else{
                 console.log('outside observer',currentUser);
             }
    }))
    const AuthInfo={
       createUser,
       signInUser,
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
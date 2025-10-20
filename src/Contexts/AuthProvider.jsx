import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
          return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signOutUser=()=>{
        return signOut(auth);
    }
    // current user information
    // onAuthStateChanged(auth,(currentUser=>{
    //          if(currentUser){
    //              console.log('inside observer',currentUser);
    //          }else{
    //              console.log('outside observer',currentUser);
    //          }
    // }))
    useEffect(()=>{
           //set the Observer
           const unSubscribe=onAuthStateChanged(auth,(currentUser=>{
                console.log('Current User Information',currentUser);
                setUser(currentUser);
            }))
            //clear the observer unmount
            return ()=>{
                unSubscribe();// unmount
            }
    },[])
    const AuthInfo={
        user,
       createUser,
       signInUser,
       signOutUser,
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
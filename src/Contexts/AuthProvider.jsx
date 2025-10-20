import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

 const googleProvider=new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
          setLoading(true);
          return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle=()=>{
       return  signInWithPopup(auth,googleProvider);
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
                setLoading(false);
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
       signInWithGoogle,
       signOutUser,
       loading,
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
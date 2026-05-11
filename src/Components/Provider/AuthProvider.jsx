import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser]=useState(null);

    const createUser =(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(createUser)=>{
            setUser(createUser);
            setLoading(false);
        });
        return()=>{
            unsubscribe();
        }
    },[]);

    const authData = {
        createUser,
        signIn,
        logOut,
        user,
        setUser,
        loading,
        updateUser
    };
    
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    // data load from api
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])



    const auth = getAuth(app)

    // sign in with email password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with pop up
    const googleProvider = new GoogleAuthProvider();
    const createUserUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // sign in with Github
    const githubProvider = new GithubAuthProvider();
    const createUserUsingGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }


    // log out 
    const logOut = () => {
        return signOut(auth);
    }

    // login user show
    const [user, setUser] = useState();
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unSubscribe;
    }, [])


    // all context element provider object
    const authInfo = {
        user,
        createUser,
        createUserUsingGoogle,
        createUserUsingGithub,
        logOut,
        categories // api data
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    // data load from api
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])



    const auth = getAuth(app)

    // sign in with email password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with pop up
    const googleProvider = new GoogleAuthProvider();
    const createUserUsingGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // sign in with Github
    const githubProvider = new GithubAuthProvider();
    const createUserUsingGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    // update user full name and PhotoURL
    const updateNamePhotoURL = (userDetails) => {
        const { name, photoURL } = userDetails;

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    //login
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // login user show
    const [user, setUser] = useState();
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
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
        logIn,
        updateNamePhotoURL, // update user name and photoURL
        loading,
        categories // api data
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { GoogleAuthProvider, createUserWithEmailAndPassword, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.confi";


export const AuthContext = createContext()




const AuthProvider = ({children}) => {

    const [user, setUser] = useState()

    const [error, setError] = useState()
    const [loading, setLoading] = useState(true) 

    const provider = new GoogleAuthProvider();


    const createUser = (email, password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return  signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
       return signOut(auth)
    }

    const googleSignUp = () =>{
        return signInWithPopup(auth, provider)
    }

    const  signInGoogle = () =>{
        return getRedirectResult(auth , provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                
              setUser(user)
              setLoading(false)
              // ...
            } else {
              // User is signed out
              setUser(null)
              // ...
            }
          });
          return unsubscribe
    },[])




    const authInfo = {
        user,
        createUser,
        setUser,
        signInUser,
        logOut,
        loading,
        signInGoogle,
        googleSignUp

    }




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
  children: PropTypes.any
}

export default AuthProvider;
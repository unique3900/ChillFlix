import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth,db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Firestore } from 'firebase/firestore';


const UserAuth = createContext();
const AuthContext = ({ children }) => {
    
  const [user, setUser] = useState({});
  const login = (email,password) => {
    return signInWithEmailAndPassword(auth,email, password);
  }
  const logout = () => {
    return signOut(auth);
  }
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);


    // Now whenever a user signups his database is created automatically that contains empty saved shows in users file
    
    setDoc(doc(db, "users", email), {
      watchlist:[]
    })
  }

  const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
    setUser(currentUser);
  })

  // When usersauthState changed?
  useEffect(() => {
    unsubscribe();
  }, [])
  
  return (
    <UserAuth.Provider value={{user,setUser,login,logout,signup}}>
      {children}
    </UserAuth.Provider>
  )
}


export const useAuth = () => {
    return useContext(UserAuth);
}
export default AuthContext

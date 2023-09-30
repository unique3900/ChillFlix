import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';
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
    return createUserWithEmailAndPassword(auth, email, password);
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

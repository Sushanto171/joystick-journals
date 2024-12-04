import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./../Firebase.init/firebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // auth service
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const info = {
    setUser,
    user,
    logInWithGoogle,
    logInWithGithub,
  };

  console.log(user);
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

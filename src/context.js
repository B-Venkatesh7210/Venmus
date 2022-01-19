import React, { useState, useContext, useEffect } from "react";
import socialMediaAuth from "./service/auth";
import firebase from "./firebase_config";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();

  const handleOnClick = async (provider) => {
    await socialMediaAuth(provider);
    checkUserLogin();
  };

  const checkUserLogin = () => {

    console.log(firebase.auth().currentUser);

    setUser(firebase.auth().currentUser);

    setIsLoggedIn(firebase.auth().currentUser ? true : false);
  };

  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        handleOnClick,
        checkUserLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };

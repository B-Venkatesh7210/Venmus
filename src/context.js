import React, { useState, useContext, useEffect } from "react";
import socialMediaAuth from "./service/auth";
import firebase from "./firebase_config";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState({
    result: "Pending",
  });
  const [user, setUser] = useState();

  const handleOnClick = async (provider) => {
    await socialMediaAuth(provider);
    checkUserLogin();
  };

  const checkUserLogin = () => {
    setUser(firebase.auth().currentUser);

    setIsLoggedIn(
      firebase.auth().currentUser
        ? {
            result: "Done",
          }
        : {
            result: "Not",
          }
    );
  };

  const Logout = () => {
    console.log("logout");
    firebase.auth().signOut();
    setUser(firebase.auth().currentUser);

    setIsLoggedIn(
      firebase.auth().currentUser
        ? {
            result: "Done",
          }
        : {
            result: "Not",
          }
    );
  };

  useEffect(() => {
    //checkUserLogin();
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => checkUserLogin());
    return () => unregisterAuthObserver();
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
        Logout,
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

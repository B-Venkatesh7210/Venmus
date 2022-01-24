import React, { useState, useContext, useEffect } from "react";
import socialMediaAuth from "./service/socialMediaAuth";
import db,{ auth } from "./firebase_config";

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
    setUser(auth.currentUser);

    setIsLoggedIn(
      auth.currentUser
        ? {
            result: "Done",
          }
        : {
            result: "Not",
          }
    );
  };

  const Logout = () => {
    auth.signOut();
    setUser(auth.currentUser);

    setIsLoggedIn(
      auth.currentUser
        ? {
            result: "Done",
          }
        : {
            result: "Not",
          }
    );
  };

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) =>
      checkUserLogin()
    );
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

import firebase from "firebase/app";

const socialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((current) => {
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      console.log(current.user.providerData[0].displayName)
      return current.user;
    })
    .catch((er) => {
      return er;
    });
};

export default socialMediaAuth;

import firebase from "firebase/app"
import db, {auth} from "../firebase_config"



const socialMediaAuth = (provider) => {
  return auth
    .signInWithPopup(provider)
    .then((current) => {
      const userDetail = current.user.providerData[0];
      auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
      console.log(userDetail.displayName)
      
      db.collection("usersData").add({
        name: userDetail.displayName,
        pic: userDetail.photoURL,
        id: current.user.uid,
        email: userDetail.email,
        phone: userDetail.phoneNumber


      })

      return current.user;
    })
    .catch((er) => {
      return er;
    });
};

export default socialMediaAuth;


// db.collection("songData").doc("faisla-24102021")
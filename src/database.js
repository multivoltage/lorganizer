import firebase from "firebase";

var config = {
  apiKey: "xxxx",
  authDomain: "xxxx",
  databaseURL: "xxxx",
  projectId: "xxxxx",
  storageBucket: "",
  messagingSenderId: "xxxx"
};

firebase.initializeApp(config);

export const database = firebase.database();

export default firebase;

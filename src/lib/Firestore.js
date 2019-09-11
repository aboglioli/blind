import firebase from './node_modules/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBu1Esp4_tfWEzmd3VgNnNC_XG-VaWwQPk",
  authDomain: "blind-adventure.firebaseapp.com",
  databaseURL: "https://blind-adventure.firebaseio.com",
  projectId: "blind-adventure",
  storageBucket: "blind-adventure.appspot.com",
  messagingSenderId: "329804302242",
  appId: "1:329804302242:web:77dad4459bad7bf88794fb"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

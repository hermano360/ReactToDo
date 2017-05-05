import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAnJ991WMLm_4PhFMSTAgvLPSp9DcYuxCM",
    authDomain: "garcia-todo-app.firebaseapp.com",
    databaseURL: "https://garcia-todo-app.firebaseio.com",
    projectId: "garcia-todo-app",
    storageBucket: "garcia-todo-app.appspot.com",
    messagingSenderId: "368236732491"
  };

  firebase.initializeApp(config);


} catch (e){

}
export var firebaseRef = firebase.database().ref();

export default firebase;

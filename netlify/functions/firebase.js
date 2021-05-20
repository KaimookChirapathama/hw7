const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAWlMatyky0XkoS0qCcU5GxKGJmKZks5i4",
  authDomain: "kiei451-e7a4c.firebaseapp.com",
  projectId: "kiei451-e7a4c",
  storageBucket: "kiei451-e7a4c.appspot.com",
  messagingSenderId: "495172859160",
  appId: "1:495172859160:web:3af168600581e512a99a6d"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAiI5UcfWWLo-t5L0K4GHYjZUQgmm5Xfu0",
    authDomain: "map-app-rn.firebaseapp.com",
    databaseURL: "https://map-app-rn.firebaseio.com",
};

firebase.initializeApp(config);
export const db = firebase.database();
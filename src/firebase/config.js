import app from 'firebase/app';
import 'firebase/auth';

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
const config = {
  apiKey: "AIzaSyDapMBGyH_vyx2mFtqAg9jGW1b-XA9Fc4A",
  authDomain: "kyushu-8b5f7.firebaseapp.com",
  databaseURL: "https://kyushu-8b5f7.firebaseio.com",
  projectId: "kyushu-8b5f7",
  storageBucket: "kyushu-8b5f7.appspot.com",
  messagingSenderId: "153005328956",
  appId: "1:153005328956:web:2fb9cf559e3185dbbd9139",
  measurementId: "G-BV187CG55X"
};

export const firebase = app.initializeApp(config);

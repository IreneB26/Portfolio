import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';


const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
  apiKey: "AIzaSyCNCjZaR8OvLlrw7qzBO1sX1X4PZ3tU6Lc",
  authDomain: "portfolio-89202.firebaseapp.com",
  databaseURL:
    "https://portfolio-89202-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-89202",
  storageBucket: "portfolio-89202.appspot.com",
  messagingSenderId: "441159313709",
  appId: "1:441159313709:web:e37d311641038d8fd04ba4",
  measurementId: "G-VW07ETRLYV",
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>,
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
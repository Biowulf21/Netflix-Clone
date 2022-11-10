import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/unauthenticated/landing-page";
import { initializeApp } from "firebase/app";

function App() {
  // Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyBxBVEYy0JHbgBdNwS4epabIcN2eaLanSI",

    authDomain: "fir-clone-d97d1.firebaseapp.com",

    projectId: "fir-clone-d97d1",

    storageBucket: "fir-clone-d97d1.appspot.com",

    messagingSenderId: "421048475493",

    appId: "1:421048475493:web:539e11b32b8873edaccb8c",
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/unauthenticated/landing-page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;

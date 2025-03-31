import React from "react";
import WelcomePopup from "./components/WelcomePopup";
import AboutUs from "./components/AboutUs"; // Import AboutUs component
import "./App.css";

function App() {
  return (
    <>
      <WelcomePopup />
      <header className="App-header">
        <h1>Welcome to Contoso Traders</h1>
        <p>Your gateway to mastering DevSecOps practices.</p>
      </header>
      <AboutUs /> {/* Add AboutUs component */}
    </>
  );
}

export default App;

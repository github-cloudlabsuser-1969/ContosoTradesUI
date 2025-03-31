import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import WelcomePopup from "./components/WelcomePopup";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about-us" component={AboutUs} />
        <Route path="/" component={WelcomePopup} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute.js";
import Login from "./components/Login.js";
import BubblePage from "./components/BubblePage.js";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubblepage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

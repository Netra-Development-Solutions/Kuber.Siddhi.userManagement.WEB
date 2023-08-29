import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import RegisterForm from "./components/forms/Register";

const App = () => (
  <div className="container">
    <RegisterForm />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

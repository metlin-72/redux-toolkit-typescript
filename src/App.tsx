import React from "react";
import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";
import ColorChange from "./component/ColorChange";

function App() {
  return (
    <div className="App">
      <Profile />      
      <Login />
      <ColorChange />
    </div>
  );
}

export default App;

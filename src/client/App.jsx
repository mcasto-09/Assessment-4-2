import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  

  return (
    <div>
      <div className="header">
        <h1>Home</h1>
        <h2 className="forYou">For You</h2>
        <h2 className="following">Following</h2>
      </div>
      <div className="post">
        <p className="text">look at this dude i found</p>
        <img className="catStare" src="https://i.kym-cdn.com/entries/icons/facebook/000/043/403/cover3.jpg"></img>
      </div>
    </div>
  );
}

export default App;
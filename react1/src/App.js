import React, { useState } from "react";
import Tweet from "./Tweet";
import "./App.css";

function App() {
  const [isLight, setLight] = useState(true) 
  const [tweets, setTweets] = useState([
    { name: "Yusuf Yiğit Aydemir", message: "Gratis NFT is coming" },
    { name: "Yusuf Yiğit", message: "Trippy Catz NFT is coming to conquer aptos ecosystem..." },
    { name: "Yiğit Aydemir", message: "Pickle Rick is a cool base char for an NFT imo" },
    { name: "Yusuf Aydemir", message: "I am almost 10k down since april lmao" }
  ])

  const changeTheme = () => {
    setLight(!isLight)
  }

  return (
    <div className={isLight ? "light" : "dark"}>
      <button onClick={changeTheme}>Change to {isLight ? "Dark" : "Light"} Theme</button>
      <h1>Hello there, this is my super simple Twitter clone :)</h1>

      {tweets.map(tweet => (
        <Tweet name={tweet.name} message={tweet.message}></Tweet>
      ))}
      
    </div>
  );
}

export default App;
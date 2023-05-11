import React from "react";
import Weatherinfo from "./components/weatherinfo";
import './App.css';

const API_KEY = "55c01dd04aa12c3f115a09b944382137"; // Replace with your own API key

function App() {

  return (
    <div className="h-screen w-screen main-container">
      <Weatherinfo />
    </div>
  );
}

export default App;

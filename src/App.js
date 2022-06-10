import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import CountdownTimer from "./components/Countdown/CountdownTimer";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <CountdownTimer />
      <Footer />
    </div>
  );
}

export default App;

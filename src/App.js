import React from "react";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import CountdownTimer from "./components/Countdown/CountdownTimer";
import Features from "./components/Features";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Main />
      <About />
      <CountdownTimer />
      <Features />
      <Footer />
    </div>
  );
}

export default App;

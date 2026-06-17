import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Steps from "./components/Steps";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Events />
      <Steps/>
    </div>
  );
};

export default App;
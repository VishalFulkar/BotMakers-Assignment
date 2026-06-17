import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Events />
    </div>
  );
};

export default App;
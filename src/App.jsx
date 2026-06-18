import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Steps from "./components/Steps";
import Botleague from "./components/Botleague";
import Categories from "./components/Categories";
import Sports from "./components/Sports";
import WhyRegister from "./components/WhyRegister";
import Join from "./components/Join";
import Sponser from "./components/Sponser";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Events />
      <Steps />
      <Botleague />
      <Categories />
      <Sports />
      <WhyRegister />
      <Join/>
      <Sponser/>
      <Footer/>
    </div>
  );
};

export default App;
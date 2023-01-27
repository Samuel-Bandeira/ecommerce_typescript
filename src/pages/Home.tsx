import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="bg-blue-300 h-[1000px]">
      <Navbar />
      <div className="h-[50px]"></div>
      <Products />
    </div>
  );
};

export default Home;

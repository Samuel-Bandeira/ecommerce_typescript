import React from "react";
import BasketItems from "../components/BasketItems";
import Navbar from "../components/Navbar";
import Subtotal from "../components/Subtotal";

const Basket = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between px-2 items-center py-2">
        <div className="bg-blue-300 w-[1000px] h-[100px]"></div>
        <Subtotal />
      </div>
      <BasketItems />
    </div>
  );
};

export default Basket;

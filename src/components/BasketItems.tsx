import React from "react";
import ProductInBasket from "./ProductInBasket";

const BasketItems = () => {
  return (
    <div>
      <p className="font-bold pb-2 border-b-2">Your Shopping Basket</p>
      <div className="mt-5 space-y-5 px-5">
        <ProductInBasket />
        <ProductInBasket />
      </div>
    </div>
  );
};

export default BasketItems;

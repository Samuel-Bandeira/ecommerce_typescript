import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ProductInBasket from "./ProductInBasket";

const BasketItems = () => {
  const { basket } = useSelector((state: RootState) => state.basket);

  return (
    <div>
      <p className="font-bold pb-2 border-b-2">Your Shopping Basket</p>
      <div className="mt-5 space-y-5 px-5">
        {basket?.map((product, index) => {
          return <ProductInBasket product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BasketItems;

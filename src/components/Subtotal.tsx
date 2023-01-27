import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getBasketTotal } from "../redux/basket";
const Subtotal = () => {
  const { basket } = useSelector((state: RootState) => state.basket);

  return (
    <div className="flex flex-col bg-gray-200 px-10 py-5">
      <p>
        Subtotal ({basket?.length} items): <span>{getBasketTotal(basket)}</span>
      </p>
      <div className="flex">
        <input type="checkbox" className="border border-black" />
        <p>This order contains a gift</p>
      </div>
      <button className="border border-black text-black bg-orange-300 p-2">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;

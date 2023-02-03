import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getBasketTotal } from "../redux/basket";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Subtotal = () => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const handleClick = () => {
    if (Object.keys(user).length > 0) navigate("/checkout");
    else
      navigate("/login", {
        state: {
          path: "/basket",
        },
      });
  };
  return (
    <div className="flex flex-col bg-gray-200 px-10 py-5">
      <p>
        Subtotal ({basket?.length} items): <span>{getBasketTotal(basket)}</span>
      </p>
      <div className="flex">
        <input type="checkbox" className="border border-black" />
        <p>This order contains a gift</p>
      </div>
      <Button action={handleClick} title="Proceed to Checkout" />
    </div>
  );
};

export default Subtotal;

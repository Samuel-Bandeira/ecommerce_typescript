import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { basketActions } from "../redux/basket";
const Product = () => {
  const { basket } = useSelector((state: RootState) => state.basket);
  console.log("basket", basket);
  const dispatch = useDispatch();
  const addToBasket = () => {
    console.log("in add");
    dispatch(
      basketActions.add({
        id: "1",
        title: "The lean startup",
        image: "https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg",
        price: 29.99,
        rating: 5,
      })
    );
  };

  return (
    <div className="border flex flex-col items-center w-[350px] h-[350px] justify-center bg-white">
      <p>The lean startup</p>
      <p>$ 29.99</p>
      <div className="flex text-orange-500">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <img
        src="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
        alt="book_cover"
        className="w-[100px]"
      />
      <button
        className="border border-black bg-orange-500 text-black px-2 mt-2"
        onClick={addToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default Product;

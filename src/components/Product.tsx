import React from "react";
import { AiFillStar } from "react-icons/ai";

const Product = () => {
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
      <button className="border border-black bg-orange-500 text-black px-2 mt-2">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;

import { AiFillStar } from "react-icons/ai";

const ProductInBasket = () => {
  return (
    <div className="flex items-center">
      <div className="mr-5">
        <img
          src="https://m.media-amazon.com/images/I/41gr3r3FSWL.jpg"
          alt="book_cover"
          className="w-[100px]"
        />
      </div>

      <div>
        <p>The lean startup</p>
        <p>$ 29.99</p>
        <div className="flex text-orange-500">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        <button className="border border-black bg-orange-500 text-black px-2 mt-2">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductInBasket;

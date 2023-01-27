import { AiFillStar } from "react-icons/ai";

interface ProductI {
  product: {
    id: string;
    title: string;
    image: string;
    price: number;
    rating: number;
  };
}
const ProductInBasket = ({ product }: ProductI) => {
  return (
    <div className="flex items-center">
      <div className="mr-5">
        <img src={product.image} alt="book_cover" className="w-[100px]" />
      </div>
      <div>
        <p>{product.title}</p>
        <p>$ {product.price}</p>
        <div className="flex text-orange-500">
          {Array(product.rating)
            .fill(0)
            .map((_, index) => {
              return <AiFillStar key={index} />;
            })}
        </div>

        <button className="border border-black bg-orange-500 text-black px-2 mt-2">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductInBasket;

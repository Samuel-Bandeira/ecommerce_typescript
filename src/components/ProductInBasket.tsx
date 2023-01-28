import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { basketActions } from "../redux/basket";
import Button from "./Button";

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
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch(basketActions.remove(product.id));
  };
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

        <Button action={removeFromBasket} title="Remove item" />
      </div>
    </div>
  );
};

export default ProductInBasket;

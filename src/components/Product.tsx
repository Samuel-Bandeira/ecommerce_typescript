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
const Product = ({ product }: ProductI) => {
  // const { basket } = useSelector((state: RootState) => state.basket);
  const dispatch = useDispatch();
  const addToBasket = () => {
    console.log("in add");
    console.log(product);
    dispatch(
      basketActions.add({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
      })
    );
  };

  return (
    <div className="border flex flex-col items-center w-[340px] h-[340px] justify-center bg-white mb-10 p-5">
      <p>{product.title}</p>
      <p>$ {product.price}</p>
      <div className="flex text-orange-500">
        {Array(product.rating)
          .fill(0)
          .map((_, index) => {
            return <AiFillStar key={index} />;
          })}
      </div>
      <img src={product.image} alt="book_cover" className="w-[100px]" />
      <Button action={addToBasket} title="Add to Basket" />
    </div>
  );
};

export default Product;

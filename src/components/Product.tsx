import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { basketActions } from "../redux/basket";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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

  const handleOpenBookPage = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div>
      <div
        className="bg-[#f8f8f8] flex justify-center px-2 pt-8"
        onClick={handleOpenBookPage}
      >
        <img src={product.image} alt="book_cover" className="h-60" />
      </div>
      <div className="bg-white px-2">
        <p className="text-[15px] ">{product.title}</p>
        <p className="text-gray-500 text-[14px]">Edição {"português"}</p>
        <p className="text-gray-500 text-[14px]">
          por {"Collen Hoover e Priscila Catão"}
        </p>
        <div className="flex items-center space-x-1">
          <p>4.8</p>
          <div className="flex text-orange-500">
            {Array(product.rating)
              .fill(0)
              .map((_, index) => {
                return <AiFillStar key={index} />;
              })}
          </div>
          <IoIosArrowDown size={"10px"} className="text-gray-500" />
          <p>({"41.597"})</p>
        </div>
        <p className="font-bold text-teal-600 text-sm">Capa Comum</p>
        <div className="flex items-center">
          <p className="text-[13px]">R$</p>
          <p className="text-xl">{product.price}</p>
        </div>
        <p className="text-sm">
          Receba até <span className="font-bold">Quarta-feira, 8 de fev</span>{" "}
          Frete GRÁTIS
        </p>
        <p>Idade: 13 anos e acima</p>
      </div>

      {/* <Button action={addToBasket} title="Add to Basket" /> */}
    </div>
  );
};

export default Product;

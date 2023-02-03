import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { AiOutlineCreditCard } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { basketActions, getBasketTotal } from "../redux/basket";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormI {}

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { basket } = useSelector((state: RootState) => state.basket);
  const { user } = useSelector((state: RootState) => state.user);

  const userData = {
    id: user!.id,
    email: "samuel@testing.com",
    name: "Samuel",
    lastName: "Bandeira de Oliveira",
    address: {
      country: "Brazil",
      street: "Rua 12 de julho",
      number: "389",
      city: "Fortaleza",
      state: {
        id: 1,
        name: "Ceará",
        code: "CE",
      },
      reference: "",
    },
    paymentMethods: [],
  };

  const removeFromBasket = (product: any) => {
    console.log(product);
    dispatch(basketActions.remove(product.id));
  };

  const handleAddPayment = () => {
    navigate("/card/add");
  };
  return (
    <div>
      <Navbar />
      {/* 01 */}
      <form>
        <div className="bg-gray-300 p-2 flex justify-center">
          <p className="text-xl">Checkout ({basket.length} items)</p>
        </div>

        <div className="flex space-x-10 p-6 border-b-2">
          <p className="font-bold">Delivery Address</p>

          <div>
            <p>{user!.email}</p>
            <p>{(userData.address.number + ", ", userData.address.street)}</p>
            <p>{userData.address.city + ", " + userData.address.state.code}</p>
          </div>
        </div>

        {/* 02 */}
        <div className="flex space-x-10 p-6 border-b-2">
          <p className="font-bold">Review items and delivery</p>
          <div className="space-y-5">
            {basket.map((product) => {
              return (
                <div className="flex space-x-10">
                  <img src={product.image} alt="product_img" width="130px" />
                  <div>
                    <p>{product.title}</p>
                    <p>Qtd: {product.quantity}</p>

                    <div className="flex">
                      {Array(product.rating)
                        .fill(0)
                        .map((_, index) => {
                          return <AiFillStar key={index} color="orange" />;
                        })}
                    </div>

                    <Button
                      title="Remove from basket"
                      action={() => removeFromBasket(product)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 03 */}
        <div className="flex space-x-10 p-6 border-b-2">
          <p className="font-bold">Payment method</p>
          <div className="space-y-5">
            <div className="flex items-center space-x-10 justify-center">
              {userData.paymentMethods.length > 0 ? (
                <select name="payment_methods">
                  <option value="hello">hello</option>
                </select>
              ) : (
                <Button
                  title="Add payment method"
                  action={handleAddPayment}
                ></Button>
              )}
            </div>

            <div className="border-2 p-5 w-[320px] flex flex-col items-center">
              <p>Order total: {getBasketTotal(basket)}</p>
              <Button title="Buy now" action={() => {}} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;

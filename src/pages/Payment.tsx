import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { AiOutlineCreditCard } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { basketActions } from "../redux/basket";
const Payment = () => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const dispatch = useDispatch();
  const user = {
    id: 1,
    email: "samuel@testing.com",
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
    paymentMethods: [
      {
        name: "Credit Card",
        number: "************7618",
        expiration: "",
        cvc: "",
      },
    ],
  };
  const removeFromBasket = (product: any) => {
    console.log(product);
    dispatch(basketActions.remove(product.id));
  };
  return (
    <div>
      <Navbar />

      {/* 01 */}
      <div className="bg-gray-300 p-2 flex justify-center">
        <p className="text-xl">Checkout (2 items)</p>
      </div>

      <div className="flex space-x-10 p-6 border-b-2">
        <p className="font-bold">Delivery Address</p>
        <div>
          <p>{user.email}</p>
          <p>{(user.address.number + ", ", user.address.street)}</p>
          <p>{user.address.city + ", " + user.address.state.code}</p>
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
          <p className="font-bold">Card details</p>
          <div className="flex items-center space-x-10">
            <AiOutlineCreditCard />
            <p>{user.paymentMethods[0].number}</p>
            <p>MM/YY/CVC</p>
          </div>
          <div className="border-2 p-5 w-[320px] flex flex-col items-center">
            <p>Order total: $239</p>
            <Button title="Buy now" action={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

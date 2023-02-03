import React from "react";
import { BsSearch, BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";

const Navbar = () => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <div className="flex justify-between items-center bg-black text-white p-2">
      <Link to="/">
        <p>amazon</p>
      </Link>
      <div className="flex items-center">
        <input type="text" className="border" />
        <div className="text-black bg-orange-700 p-1">
          <BsSearch />
        </div>
      </div>

      <div className="flex space-x-5">
        <Link to="/login">
          <p>Hello {user ? user!.name : "guest Sign I"}</p>
        </Link>

        <p>
          Returns <span>& Orders</span>
        </p>
        <p>
          Your <span>Prime</span>
        </p>
      </div>
      <div className="flex items-center">
        <Link to="/basket">
          <BsFillBasketFill />
        </Link>
        <p>{basket?.length}</p>
      </div>
    </div>
  );
};

export default Navbar;

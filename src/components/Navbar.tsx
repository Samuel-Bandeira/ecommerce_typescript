import React from "react";
import { BsSearch, BsFillBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <p>
          Hello guest <span>Sign In</span>
        </p>
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
        <p>{0}</p>
      </div>
    </div>
  );
};

export default Navbar;

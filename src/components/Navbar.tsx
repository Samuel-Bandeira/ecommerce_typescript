import React from "react";
import { BsSearch, BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownFill } from "react-icons/ri";
import { BsMinecart } from "react-icons/bs";
const Navbar = () => {
  const { basket } = useSelector((state: RootState) => state.basket);
  const { user } = useSelector((state: RootState) => state.user);
  const amazonLogo =
    "https://m.media-amazon.com/images/G/32/BR/SSR/amazon-com-br_rgb_rev_half._CB1198675309_._SL1280_FMpng_.png";
  return (
    <div className="flex justify-between items-center bg-black text-white p-2 items-center">
      <Link to="/">
        <img src={amazonLogo} alt="amazon_logo" className="w-[160px] mt-1" />
      </Link>

      <div className="flex items-center">
        <CiLocationOn className="text-[25px] mt-2" />
        <div className="leading-4">
          <p className="text-sm">Olá</p>
          <p className="font-bold text-white">Selecione o endereço</p>
        </div>
      </div>

      <div className="flex items-center h-[45px] w-[50%]">
        <select
          name="Hello"
          id=""
          defaultChecked={true}
          className="text-black h-full p-1 rounded-l-lg"
        >
          <option value="">Todos</option>
          <option value="">op2</option>
          <option value="">op3</option>
          <option value="">op4</option>
        </select>
        <input
          type="text"
          className="border h-full flex-1 px-2 text-black"
          placeholder="Pesquisa Amazon.com.br"
        />
        <div className="text-black bg-[#febd69] h-full flex items-center w-[50px] justify-center rounded-r-lg">
          <BsSearch />
        </div>
      </div>

      <div className="flex space-x-5 leading-3 items-center text-sm">
        <Link to="/login">
          <p className="mt-2">Olá {user ? user!.name : "faça seu login"}</p>
          <div className="flex items-center ">
            <p className="font-bold text-white">Contas e Listas</p>
            <RiArrowDropDownFill className="text-[30px] mt-1" />
          </div>
        </Link>
      </div>

      <div className="text-sm">
        <p>Devoluções</p>
        <p>e Pedidos</p>
      </div>

      <Link to="/basket" className="flex items-center space-x-1">
        <div className="relative">
          <BsMinecart className="text-[41px]" />
          <p className="absolute top-1.5 left-4">{basket?.length}</p>
        </div>
        <p className="mt-6 font-bold text-sm">Carrinho</p>
      </Link>
    </div>
  );
};

export default Navbar;

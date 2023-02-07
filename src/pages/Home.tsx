import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex mt-5">
        <div className="w-[55%] flex-col items-center flex">
          <p>Filtragem</p>
          <p>em construção!</p>
        </div>
        <div>
          <p className="text-xl mb-2">RESULTADOS</p>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;

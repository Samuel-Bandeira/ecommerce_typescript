import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="h-[50px]"></div>
      <div className="flex">
        <div className="w-[55%]"></div>
        <div>
          <p className="text-xl mb-2">RESULTADOS</p>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;

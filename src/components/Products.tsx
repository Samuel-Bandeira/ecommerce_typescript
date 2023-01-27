import Product from "./Product";

const Products = () => {
  return (
    <div>
      <div className="flex mb-10 justify-around">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="flex justify-around">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;

import Product from "./Product";

const Products = () => {
  const products = [
    {
      id: "A39494AC",
      title:
        "It Starts with Us: A Novel (It Ends with Us Book 2) (English Edition)",
      image: "https://m.media-amazon.com/images/I/71PNGYHykrL._AC_UL320_.jpg",
      price: 67.9,
      rating: 5,
    },
    {
      id: "Ae39485A",
      title: "ABC Alphabet Book: With animal facts (English Edition)",
      image: "https://m.media-amazon.com/images/I/31sB7XFqKWS.jpg",
      price: 30.9,
      rating: 5,
    },
  ];

  return (
    <div>
      <div className="flex mb-10 justify-around">
        {products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Products;

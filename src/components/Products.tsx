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
    {
      id: "Ae33949D",
      title: "A Biblioteca da Meia-Noite",
      image: "https://m.media-amazon.com/images/I/81iqH8dpjuL._AC_UY218_.jpg",
      price: 34.9,
      rating: 5,
    },
    {
      id: "Ae33949E",
      title: "É Assim que Acaba: 1",
      image: "https://m.media-amazon.com/images/I/91r5G8RxqfL._AC_UY218_.jpg",
      price: 31.9,
      rating: 5,
    },
    {
      id: "Ae33949F",
      title: "É Assim que Acaba: 1",
      image: "https://m.media-amazon.com/images/I/91r5G8RxqfL._AC_UY218_.jpg",
      price: 31.9,
      rating: 5,
    },
    {
      id: "Ae33949G",
      title: "É Assim que Acaba: 1",
      image: "https://m.media-amazon.com/images/I/91r5G8RxqfL._AC_UY218_.jpg",
      price: 31.9,
      rating: 5,
    },
    {
      id: "Ae33949H",
      title: "É Assim que Acaba: 1",
      image: "https://m.media-amazon.com/images/I/91r5G8RxqfL._AC_UY218_.jpg",
      price: 31.9,
      rating: 5,
    },
    {
      id: "Ae33949I",
      title: "É assim que começa (Vol. 2 É assim que acaba)",
      image: "https://m.media-amazon.com/images/I/813TDwBsihL._AC_UY218_.jpg",
      price: 31.9,
      rating: 5,
    },
    {
      id: "Ae33949J",
      title:
        "As coisas que você só vê quando desacelera: Como manter a calma em um mundo frenético",
      image: "https://m.media-amazon.com/images/I/61OEg3V-FTL._AC_UY218_.jpg",
      price: 31.9,
      rating: 5,
    },
    {
      id: "Ae33949K",
      title:
        "O livro que você gostaria que seus pais tivessem lido: (e seus filhos ficarão gratos por você ler)",
      image: "https://m.media-amazon.com/images/I/71BROqAwZtL._AC_UY218_.jpg",
      price: 31.9,
      rating: 5,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        {products.map((product, index) => {
          return <Product product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Products;

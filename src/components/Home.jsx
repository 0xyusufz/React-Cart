import React from "react";
import "../styles/home/home.scss";
import Mackbook from "../assets/img1.avif";
import iphone from "../assets/img2.jpeg";
import toast from "react-hot-toast";

const Home = () => {
  let productList = [
    {
      name: "Mac Book",
      price: 89000,
      imgSrc: Mackbook,
      id: "p1",
    },
    {
      name: "iPhone 15",
      price: 75000,
      imgSrc: iphone,
      id: "p2",
    },
  ];
  const addToCartHandler = (options) => {
    console.log(options);
    toast.success("Added to cart");
  };
  return (
    <div className="home">
      {productList.map(function (elem) {
        return (
          <ProductCard
            key={elem.id}
            name={elem.name}
            id={elem.id}
            price={elem.price}
            imgSrc={elem.imgSrc}
            handler={addToCartHandler}
          />
        );
      })}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  return (
    <div className="productCard">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        add to cart
      </button>
    </div>
  );
};

export default Home;

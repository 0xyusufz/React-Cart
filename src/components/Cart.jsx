import React from "react";
import "../styles/cart/Cart.scss";
import { AiFillDelete } from "react-icons/ai";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.jpeg";

const Cart = () => {
  return (
    <div>
      <h1 className="cart">
        <main>
          <CartItem
            imgSrc={img2}
            name={"Macbook"}
            price={90000}
            qty={1}
            id={"234dfg"}
          />
        </main>
        <aside>
          <h2>subtotal: ${2000}</h2>
          <h2>Shipping: ${200}</h2>
          <h2>Tax: ${20}</h2>
          <h2>Total: ${2220}</h2>
        </aside>
      </h1>
    </div>
  );
};

let CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => {
  return (
    <div className="cartItem">
      <img src={imgSrc} alt={name} />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>

      <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default Cart;

import "./App.css";
import Product from "./component/Product";
import Nav from "./component/Nav";
import { useState } from "react";
function App() {
  const [items] = useState([
    { name: "Monitor", price: "₹500", addedToCart: false },
    {
      name: "Mouse",
      price: "₹700",
      addedToCart: false,
    },
    {
      name: "Keyboard",
      price: "₹1500",
      addedToCart: false,
    },
    {
      name: "HeadPhone",
      price: "₹1000",
      addedToCart: false,
    },
  ]);
  // cart Count details
  const [cart, setCart] = useState(0); //by default cart value is 0;
  // call back() will call by child with child to parent passing data;
  const Child = (data, name) => {
    setCart(cart + data);
    console.log(name);
    items.map((item) => {
      if (name === item.name) {
        item.addedToCart = !item.addedToCart;
      }
      return item;
    });
    console.log(items);
  };
  return (
    <div className="App">
      <Nav cartCount={cart} />
      <div className="cardContainer">
        {items.map((item, index) => {
          return <Product key={index} value={item} parent={Child} />;
        })}
      </div>
    </div>
  );
}

export default App;

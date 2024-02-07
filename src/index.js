import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  /*
1 sposob - inline
    return <h1 style={{color: "red", textTransform: "uppercase", fontSize: "3rem"}}>Fast React Pizza Co.</h1>;
*/

  /*
    2 sposób mozliwy bo style w inlinie to obiekt:
    const styling = {
      color: "red",
      textTransform: "uppercase",
      fontSize: "3rem",
    };
    return <h1 style={styling}>Fast React Pizza Co.</h1>;
*/

  // 3 sposob
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const isPizzas = pizzas.length > 0;

  return (
    <main className="menu">
      <h2>Our HOT menu</h2>
      {/*warunkowe renderowanie z operatorem &&
      {isPizzas && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
      */}
      {
        //warunkowe renderowanie z operatorem potrójnym
      }
      {isPizzas ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still preparing perfect circles</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  /*
  przy przujmowaniu propsów od razu robimy destrukturyzację opbiektu props,
  wiemy że zawiera obiekt pizzaObj, wygląda dokładnie tak: let props = { pizzaObj: {ingredients:"Tomato, mozarella, ham,aragula, and burrata cheese", name: "Pizza Prosciutto", photoName:"pizzas/prosciutto.jpg", price:18, soldOut: false}}, zapis function({pizzaObj}) to natychmiastowa destrukturyzacja obiektu props i "pobranie" obiektu pizzaObj
  */

  if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 20;
  const closeHour = 8;
  const isOpen = hour >= openHour || hour <= closeHour;

  //   isOpen ? alert("We are open!") : alert("Wait till we will be open");

  // skladnia wieloreturnowa, może być wiele returnów w componencie ale każdy z nich zwraca tylko jeden blok/element
  if (!isOpen) return <p>Closed. Come back when the sun goes down.</p>;

  return (
    <footer className="footer">
      {isOpen && <Order closeHour={closeHour} openHour={openHour} />}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  // ponownie uzyta destrukturyzacja obiektu props, do proposów przekazano 2 właśćiwości closeHour=8 i openHour=20
  return (
    <div className="order">
      <p>
        We are OPEN from dusk ({openHour}:00) till dawn ({closeHour}:00)
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import { Redirect, Route, Switch } from "react-router";
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Basket from "./components/Basket/Basket";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import { BasketContext } from "./context";
import Footer from "./components/Footer/Footer";

function App() {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const get = localStorage.getItem("basket");
    const loadedBasket = JSON.parse(get);
    if (loadedBasket) {
      setBasket(loadedBasket);
    }
  }, []);

  useEffect(() => {
    const save = JSON.stringify(basket);
    localStorage.setItem("basket", save);
  }, [basket]);

  return (
    <div className="App">
      <BasketContext.Provider value={{ basket, setBasket }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/basket" component={Basket} />
         
        </Switch>
      </BasketContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

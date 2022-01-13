import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Slider from "./../Slider/Slider";
import { BasketContext } from "../../context";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const { basket, setBasket } = useContext(BasketContext);

  const totalAmount = basket.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.amount),
    0
  );

  return (
    <div>
      <section className={styles.navbar}>
        <div className={styles.logo}></div>
        <div className={styles.links}>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/menu" className={styles.link}>
            Menu
          </NavLink>
          <NavLink to="/about" className={styles.link}>
            About us
          </NavLink>
          <NavLink to="/contacts" className={styles.link}>
            Contacts
          </NavLink>

          {basket.length == 0 ? (
            <button disabled className={styles.disabled}>
              Basket
            </button>
          ) : (
            <div className={styles.basket_box}>
              <NavLink to="/basket" className={styles.link}>
                Basket
              </NavLink>
              <div className={styles.basket}>{totalAmount}</div>
            </div>
          )}
        </div>
      </section>
      <button
        className={!clicked ? styles.button : styles.button_active}
        onClick={() => setClicked(!clicked)}
      />
      <section
        className={clicked ? styles.navbar_hidden : styles.navbar_hidden_active}
      >
        <div className={styles.links_hidden}>
          <NavLink
            to="/"
            className={styles.link_hidden}
            onClick={() => setClicked(!clicked)}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={styles.link_hidden}
            onClick={() => setClicked(!clicked)}
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={styles.link_hidden}
            onClick={() => setClicked(!clicked)}
          >
            About us
          </NavLink>
          <NavLink
            to="/contacts"
            className={styles.link_hidden}
            onClick={() => setClicked(!clicked)}
          >
            Contacts
          </NavLink>

          {basket.length == 0 && clicked ? (
            <button disabled className={styles.link_hidden_disabled}>
              Basket
            </button>
          ) : (
            <div className={styles.basket_box_hidden}>
              <NavLink
                to="/basket"
                className={styles.link_hidden}
                onClick={() => setClicked(!clicked)}
              >
                Basket
              </NavLink>
              <div className={styles.basket_hidden}>{totalAmount}</div>
            </div>
          )}
        </div>
      </section>
      <Slider clicked={clicked} />
    </div>
  );
}

export default Navbar;

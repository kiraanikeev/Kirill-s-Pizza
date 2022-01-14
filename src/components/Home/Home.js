import React from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}> Kirill's Pizza</h1>
      <h2 className={styles.subtitle}>
        Tasty pizzas made with fresh ingredients
      </h2>
      <NavLink to="/menu" className={styles.button}>
        Order
      </NavLink>
    </div>
  );
}

export default Home;

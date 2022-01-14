import React from "react";
import styles from "./About.module.css";
import pizza from "../../images/pizza.png";
function About() {
  return (
    <div className={styles.about}>
      <h3 className={styles.title}>About us</h3>
      <div className={styles.img}></div>
      <div className={styles.background}>
        <p className={styles.description}>
          Are you a fan of pizza? Exquisite aroma, the most delicate cheese
          crust, the thinnest dough and the most delicious varied filling – what
          could be better than pizza, expertly prepared according to exclusive
          Italian recipes? Today pizzerias are opening almost everywhere.
          However, not every of these establishments can boast of a high level
          of quality and unsurpassed taste properties of the products offered.
        </p>
        <p className={styles.description}>
          <span className={styles.text}>Kirill's Pizza</span> in Kazan offers
          you to plunge into the wonderful world of delicious aromatic pizza and
          try the best samples of this dish prepared according to traditional
          Italian recipes. Our chefs are true high-class professionals who
          carefully keep the secrets and technologies of cooking delicious
          Italian pizza. <img src={pizza}></img>
        </p>
      </div>{" "}
    </div>
  );
}

export default About;

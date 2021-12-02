import React from "react";
import styles from "./PopupOrder.module.css";
import { NavLink } from "react-router-dom";

function PopupOrder(props) {
  const btnOK = () => {
    props.setPopupOrder(false);
    props.setNameOrder("");
    props.setPhoneOrder("");
    props.setBasket([]);
  };

  return (
    <section
      className={props.popupOrder ? styles.active : styles.hidden}
      onClick={btnOK}
    >
      <div className={styles.overlay}>
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
          <button className={styles.btnClose} type="button" onClick={btnOK} />
          <h3 className={styles.title}>Order Information</h3>
          <p className={styles.text}>
            Dear {props.nameOrder}, thank you for your order at Kirill's Pizza.
            The cost of your order is {props.totalPrice} rubles. In the near
            future, our manager will contact you by phone {props.phoneOrder} to
            clarify all the details of the order.
          </p>
          <NavLink to="/menu">
            {" "}
            <button className={styles.btnOk} type="button" onClick={btnOK}>
              ОК
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default PopupOrder;

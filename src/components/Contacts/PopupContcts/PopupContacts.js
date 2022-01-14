import React from "react";
import styles from "./PopupContacts.module.css";

function PopupContacts(props) {
  const btnOK = () => {
    props.setPopupContscts(false);
    props.setName("");
    props.setEmail("");
    props.setMessage("");
  };

  return (
    <section
      className={props.popupContacts ? styles.active : styles.hidden}
      onClick={btnOK}
    >
      <div className={styles.overlay}>
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
          <button className={styles.btnClose} type="button" onClick={btnOK} />
          <h3 className={styles.title}>The message was sent successfully</h3>
          <p className={styles.text}>
            Dear {props.namePopup}, thank you for your message. Your opinion is
            important to us. We will try to reply to {props.emailPopup} as soon
            as possible.
          </p>
          <button className={styles.btnOk} type="button" onClick={btnOK}>
            ОК
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopupContacts;

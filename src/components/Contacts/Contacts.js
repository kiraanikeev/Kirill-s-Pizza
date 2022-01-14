import React, { useState } from "react";
import styles from "./Contacts.module.css";
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import PopupContacts from "./PopupContcts/PopupContacts";
function Contacts() {
  const [popupContacts, setPopupContscts] = useState(false);
  const [namePopup, setName] = useState("");
  const [emailPopup, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    setPopupContscts(true);
  };

  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Contacts</h3>
      <span className={styles.subTitle}>
        You can find us by the contacts provided or send us a message using the
        form below
      </span>

      <form
        id="contact-form"
        onSubmit={submitHandle}
        className={styles.formArea}
      >
        <label className={styles.label}>Full Name</label>
        <input
          name="name"
          placeholder="Enter full name..."
          type="text"
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
          required
          minLength={2}
          maxLength={40}
          value={namePopup}
        />
        <label className={styles.label}>Email</label>
        <input
          name="email"
          placeholder="Enter email..."
          type="email"
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          required
          minLength={2}
          maxLength={40}
          value={emailPopup}
        />
        <label className={styles.label}>Message</label>
        <textarea
          rows="6"
          placeholder="Enter message..."
          name="message"
          required
          minLength={2}
          maxLength={200}
          className={styles.textarea}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>

      <div className={styles.contacts}>
        <ul>
          <li className={styles.contact}>Address:</li>
          <li className={styles.contact}>
            <span>Kazan, Ochen Veselua street 1</span>
          </li>
          <li className={styles.contact}>
            <span>
              <img src={phone} /> +7995330*009
            </span>
          </li>
          <li className={styles.contact}>
            <span>
              <img src={email} /> kiraanikeev@mail.ru
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.img}></div>
      <PopupContacts
        popupContacts={popupContacts}
        setPopupContscts={setPopupContscts}
        namePopup={namePopup}
        setName={setName}
        setEmail={setEmail}
        emailPopup={emailPopup}
        setMessage={setMessage}
      />
    </div>
  );
}

export default Contacts;

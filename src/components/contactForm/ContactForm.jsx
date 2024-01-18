"use client";
import React from "react";
import DefaultButton from "@/components/defaultButton/DefaultButton";
import styles from "./contactFrom.module.css";
const ContactForm = () => {
  return (
    <form
      action=""
      method="post"
      className={styles.formContainer}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles.inputContainer}>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Email Address"
        />
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Phone Number (optional)"
        />
      </div>
      <div className={styles.inputContainer}>
        <textarea
          id="w3review"
          name="w3review"
          rows="10"
          cols="50"
          className={styles.nameInput}
          placeholder="Message"
        ></textarea>
      </div>
      <DefaultButton text="Send" color="#3673fd" textColor="#fff" />
    </form>
  );
};

export default ContactForm;

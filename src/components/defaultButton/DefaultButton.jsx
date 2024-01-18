import React from "react";
import styles from "./defaultbutton.module.css";
const DefaultButton = (props) => {
  return (
    <>
      <button
        style={{ backgroundColor: props.color, color: props.textColor }}
        className={styles.btn}
      >
        {props.text}
      </button>
    </>
  );
};

export default DefaultButton;

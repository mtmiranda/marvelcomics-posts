import React from "react";

import styles from "./styles.module.scss";

const Button = ({ text, onClick, disabled }) => {
  return (
    <button disabled={disabled} className={styles.buttonLoad} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

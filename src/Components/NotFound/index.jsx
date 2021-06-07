import React from "react";

import styles from "./styles.module.scss";
import { Footer } from "../../Components/Footer";

export const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1>Not Found</h1>
      <Footer />
    </div>
  );
};

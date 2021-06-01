import React from "react";
import styles from "./styles.module.scss";

export const FullpageLoader = () => {
  return (
    <div className={styles.bgImage}>
    <div className={styles.loaderOverlay}>
        <div className={styles.loaderContainer}>
          <div className={`${styles.loader} ${styles.hq}`}>
            <figure className={styles.page}></figure>
            <figure className={styles.page}></figure>
            <figure className={styles.page}></figure>
          </div>
          <h4>Loading</h4>
        </div>
      </div>
    </div>
  );
};

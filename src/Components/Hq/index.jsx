import React from "react";

import styles from "./styles.module.scss";

export const Hq = ({ comic }) => {
  return (
    <div className={styles.hqWrapper}>
      <div className={styles.hq}>
        <h4 className={styles.hqTitle}>{comic.title}</h4>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={`${comic.title}`}
        />
      </div>
    </div>
  );
};

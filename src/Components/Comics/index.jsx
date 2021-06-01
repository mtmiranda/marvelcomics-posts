import React from "react";
import { Hq } from "../Hq";

import styles from "./styles.module.scss";

export const Comics = ({ comics }) => {
  return (
    <section className={styles.comics}>
      {comics.map((comic) => (
        <Hq key={comic.id} comic={comic} />
      ))}
    </section>
  );
};

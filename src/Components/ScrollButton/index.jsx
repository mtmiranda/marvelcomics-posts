import React, { useState } from "react";
import { RiArrowUpCircleFill } from "react-icons/ri";

import styles from "./styles.module.scss";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={styles.btnScrollTop}
      style={{ display: visible ? "block" : "none" }}
    >
      <RiArrowUpCircleFill onClick={scrollToTop} style={{ fill: "black" }} />
    </div>
  );
};

import React from "react";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <section className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <a
          href="https://developer.marvel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.imgLogoOld}
            src="\imgs\marvel-logo-old.png"
            alt="marvel-logo-old"
          />
        </a>
        <span>Designed By (mtmiranda)</span>
        <div className={styles.footerIconsWrapper}>
          <div className={styles.icon}>
            <a
              href="https://github.com/mtmiranda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="\imgs\github.svg" alt="" className={styles.icon} />
            </a>
          </div>
          <div className={styles.icon}>
            <a
              href="https://www.linkedin.com/in/matheusmdsm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="\imgs\linkedin.svg" alt="" className={styles.icon} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

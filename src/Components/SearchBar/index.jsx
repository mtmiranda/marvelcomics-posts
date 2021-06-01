import React from "react";
import styles from "./styles.module.scss";

export const SearchBar = ({ searchValue, handleChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputSearch}
        type="search"
        placeholder="Search Comics"
        onChange={handleChange}
        value={searchValue}
      />
    </div>
  );
};

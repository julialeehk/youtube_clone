import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = (event) => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
        <h1 className={styles.header_title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className={styles.input}
        onKeyPress={onKeyPress}
      />
      <button
        type="submit"
        className={styles.submit_button}
        onClick={handleSearch}
      >
        <img
          src="/images/search.png"
          alt="search"
          className={styles.button_img}
        />
      </button>
    </header>
  );
};

export default memo(SearchHeader);

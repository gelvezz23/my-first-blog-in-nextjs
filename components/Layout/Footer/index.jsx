import React from "react";
import styles from "./Footer.module.css";
function footer() {
  return (
    <footer className={styles.footer}>
      Powered by
      <span className={styles.logo}>Carlos</span>
    </footer>
  );
}

export default footer;

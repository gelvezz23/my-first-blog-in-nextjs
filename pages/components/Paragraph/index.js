import React from "react";
import styles from "./Paragraph.module.css";

export const Paragraph = ({ children }) => {
  return <div className={styles.lead}>{children}</div>;
};

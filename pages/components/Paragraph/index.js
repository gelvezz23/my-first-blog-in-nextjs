import React from "react";
import styles from "./Paragraph.module.css";

export const Paragraph = ({ content }) => {
  return <p className={styles.lead}>{content}</p>;
};

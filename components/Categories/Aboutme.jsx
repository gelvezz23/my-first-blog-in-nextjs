import React from "react";
import Link from "next/link";
import styles from "./../../styles/Home.module.css";
function Aboutme({ posts }) {
  return (
    <>
      <div className={styles.categorieTitle}>
        <h3>About me</h3>
      </div>
      <div className={styles.grid}>
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/${post.slug}`}>
              <a className={styles.card}>
                <h2>{post.title} &rarr;</h2>
                <p>{post.description}</p>
                <div className={styles.date}>{post.date}</div>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Aboutme;

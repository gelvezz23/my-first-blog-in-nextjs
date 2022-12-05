import React from "react";
import Link from "next/link";
import styles from "./../../styles/Home.module.css";
function SoftwareArquitecture({ posts }) {
  return (
    <>
      <h3>Arquitectura de software</h3>
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

export default SoftwareArquitecture;

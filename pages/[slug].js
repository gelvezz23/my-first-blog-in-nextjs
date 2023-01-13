import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles, getAllFilesMetadata } from "../lib/mdx";
import MDXcomponentsJs from "./components/MDXcomponents.js";
import styles from "./../styles/Slug.module.css";
import Asidebar from "../components/Asidebar";
function Post({ source, posts }) {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.containerSlug}>
          <MDXRemote {...source} components={MDXcomponentsJs} />
        </div>
      </section>
      <div className="section">
        <Asidebar post={posts} />
      </div>
    </>
  );
}
export const getStaticProps = async ({ params }) => {
  const { source, frontmatter } = await getFileBySlug(params.slug);
  const posts = await getAllFilesMetadata();
  return {
    props: { source, frontmatter, posts: posts },
  };
};

export const getStaticPaths = async () => {
  const posts = await getFiles();

  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,

    fallback: false,
  };
};

export default Post;

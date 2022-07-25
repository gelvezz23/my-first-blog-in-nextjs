import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../lib/mdx";
import MDXcomponentsJs from "./components/MDXcomponents.js";

function Post({ source, frontmatter }) {
  return <MDXRemote {...source} components={MDXcomponentsJs} />;
}
export const getStaticProps = async ({ params }) => {
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: { source, frontmatter },
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

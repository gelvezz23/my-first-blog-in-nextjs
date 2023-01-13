import React from "react";
import Link from "next/link";
import {
  Card,
  DateContent,
  CategorieTitle,
  Title,
  Description,
  Grid,
} from "./styles";
const Aboutme = ({ posts }) => {
  return (
    <>
      <CategorieTitle>
        <h3>About me</h3>
      </CategorieTitle>
      <Grid>
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/${post.slug}`}>
              <Card>
                <Title>{post.title} &rarr;</Title>
                <Description>{post.description}</Description>
                <DateContent>{post.date}</DateContent>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </>
  );
};

export default Aboutme;

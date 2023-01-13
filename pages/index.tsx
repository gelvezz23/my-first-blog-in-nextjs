import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllFilesMetadata } from "../lib/mdx";
import styles from "../styles/Home.module.css";
import Icon from "./../public/assets/icon.png";
import Aboutme from "./../components/Categories/Aboutme";
import SoftwareArquitecture from "./../components/Categories/SoftwareArquitecture";
import ReactCategorie from "./../components/Categories/ReactCategorie";

export default function Home({ posts }) {
  const aboutme = posts.filter((post) => post.categorie === "about me");
  const softwareArquitecture = posts.filter(
    (post) => post.categorie === "Arquitectura de software"
  );
  const react = posts.filter((post) => post.categorie === "react");

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Mi blog - carlos mario gomez gelvez</title>
          <meta
            name="description"
            content="Un blog creado a partir de mi conocimiento y estudio a lo largo de mi vida"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.main}>
          <Image
            src={Icon}
            alt="Picture of the author"
            width={300}
            height={300}
          />
          <h1 className={styles.title}>
            Bienvenido a mi primer blog <br />
            <Link href="#">Soy Carlos!</Link>
          </h1>
          <section className={styles.containerCategories}>
            <Aboutme posts={aboutme} />
            <SoftwareArquitecture posts={softwareArquitecture} />
            <ReactCategorie posts={react} />
          </section>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
};

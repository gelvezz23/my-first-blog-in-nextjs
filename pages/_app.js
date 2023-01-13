import Head from "next/head";
import Asidebar from "../components/Asidebar";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mi blog - carlos mario gomez gelvez</title>
        <meta
          name="description"
          content="Un blog creado a partir de mi conocimiento y estudio a lo largo de mi vida"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="section">
          <Asidebar post={pageProps.posts} />
        </div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;

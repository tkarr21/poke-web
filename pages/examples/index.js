import Head from 'next/head';
import Header from '../../components/Header';
import ExamplesPage from '../../components/ExamplesPage';
import Footer from '../../components/Footer';

const Examples = () => { 
  return (
    <>
      <Head>
        <title>Examples</title>
        <link rel="icon" href="./favicon.ico"/>
      </Head>
      <main>
        <Header />
        <ExamplesPage />
        <Footer />
      </main>
    </>
  );
};

export default Examples;
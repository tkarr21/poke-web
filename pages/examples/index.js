import Head from 'next/head';
import Header from '../../components/Header';
import ExamplesPage from '../../components/ExamplesPage';

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
      </main>
    </>
  );
};

export default Examples;
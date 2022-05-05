import Head from 'next/head';
import Header from '../../components/Header';
import ProcessPage from '../../components/ProcessPage';
import Footer from '../../components/Footer';

const Process = () => {
  return (
    <>
      <Head>
        <title>Process</title>
        <link rel="icon" href="./favicon.ico"></link>
      </Head>
      <main>
        <Header />
        <ProcessPage />
        <Footer />
      </main>
    </>
  );
};

export default Process;

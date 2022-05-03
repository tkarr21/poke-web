import Head from 'next/head';

import Header from '../components/Header';
import GeneratePage from '../components/GeneratePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Poke Maker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <GeneratePage />
      </main>
    </>
  )
}

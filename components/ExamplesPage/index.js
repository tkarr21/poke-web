import React from 'react';
import Layout from '../Layout';
import styles from './examplespage.module.scss';
import PokeSummary from '../PokeSummary';

import examples from './assets/example_pokes';


const ExamplesPage = () => { 
  return (
    <Layout>
      <p className={styles.title}>Examples</p>
      <div className={styles.container}>
        {examples.map((example_poke) => {
          return (
            <PokeSummary poke={example_poke} />
          );
        })}
      </div>
    </Layout>
  );
};

export default ExamplesPage;

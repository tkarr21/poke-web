import React, { useState } from 'react';
import styles from './generatepage.module.scss';
import Layout from '../Layout';
import StatSlider from '../StatSlider';




const GeneratePage = () => {
  const [hp, setHp] = useState(1);
  const [attack, setAttack] = useState(5);
  const [defense, setDefense] = useState(5);
  const [sp_attack, setSp_attack] = useState(10);
  const [sp_defense, setSp_defense] = useState(20);
  const [speed, setSpeed] = useState(5);
  const [type, setType] = useState('normal');

  let stats = [
    {
      name: 'HP',
      variable: hp,
      setter: setHp,
      min: 1,
      max: 255
    },
    {
      name: 'Attack',
      variable: attack,
      setter: setAttack,
      min: 5,
      max: 160
    },
    {
      name: 'Defense',
      variable: defense,
      setter: setDefense,
      min: 5,
      max: 230
    },
    {
      name: 'Sp. Attack',
      variable: sp_attack,
      setter: setSp_attack,
      min: 10,
      max:154
    },
    {
      name: 'Sp. Defense',
      variable: sp_defense,
      setter: setSp_defense,
      min: 20,
      max: 230
    },
    {
      name: 'Speed',
      variable: speed,
      setter: setSpeed,
      min: 5,
      max: 160
    }
  ];
  
  const renderSliders = () => {
    return (
      <>
        {stats.map((s) => {
          return (
            <>
            <StatSlider
              name={s.name}
              min={s.min}
              max={s.max}
              value={s.variable}
              setValue={s.setter}
            /> 
            </>
          );
        })}
      </>
    )
  };

  return (
    <Layout>
      <h1>GeneratePage</h1>
      <div className={styles.statsContainer}>
        {renderSliders()}
        <div className={styles.typeSelectContainer}>
          <div className={styles.selector}>
            <p>Type</p>
          </div>
          <select value={type} onChange={(e) => setType(e.target.value)} className={styles.selector}>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="ice">Ice</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
          </select>
        </div>
      </div>
      
    </Layout>
  );
}

export default GeneratePage;
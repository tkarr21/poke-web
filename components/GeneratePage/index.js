import React, { useState } from 'react';
import Image from 'next/image'
import styles from './generatepage.module.scss';
import Layout from '../Layout';
import StatSlider from '../StatSlider';
import PokeSummary from '../PokeSummary';
import { useAppContext } from '../../context/state';
import { createPoke } from '../../backend_calls/poke-server';



const GeneratePage = () => {
  const [hp, setHp] = useState(1);
  const [attack, setAttack] = useState(5);
  const [defense, setDefense] = useState(5);
  const [sp_attack, setSp_attack] = useState(10);
  const [sp_defense, setSp_defense] = useState(20);
  const [speed, setSpeed] = useState(5);
  const [type, setType] = useState('normal');

  const { fetching, setFetching, pokemon, setPokemon } = useAppContext();

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
           
            <StatSlider
              name={s.name}
              min={s.min}
              max={s.max}
              value={s.variable}
              setValue={s.setter}
              key={s.name}
            /> 
           
          );
        })}
      </>
    )
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetching(true);
    createPoke(hp, attack, defense, sp_attack, sp_defense, speed, type, setFetching, setPokemon);
  };

  return (
    <Layout>
      
      <div className={styles.bod}>
        <div className={styles.statsContainer}>
          <p className={styles.title}>Poke-Maker</p>
          {renderSliders()}
          <div className={styles.typeSelectContainer}>
            <div className={styles.selector} style={{ maxWidth: '120px'}}>
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
            <div className={styles.typeImage}>
              <Image src={`/type_images/${type}.png`} alt={`${type} emblem`} height={40} width={40}/>
            </div>
            <div className={styles.typeImageMobile}>
              <Image src={`/type_images/${type}.png`} alt={`${type} emblem`} height={25} width={25}/>
            </div>
          </div>
          
          <button
            className={styles.createButton}
            disabled={fetching}
            onClick={(e) => { handleSubmit(e) }}
          >
            {fetching ?
              <i className="fa fa-circle-o-notch fa-spin"></i> :
              "Create"
            }
          </button>
        </div>
        <PokeSummary poke={pokemon}/>
      </div>
    </Layout>
  );
}

export default GeneratePage;
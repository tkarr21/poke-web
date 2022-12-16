import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./pokesummary.module.scss";
import { createDesc } from "../../backend_calls/poke-server";
import { useAppContext } from "../../context/state";

const PokeSummary = ({ poke }) => {
  const { desc, setDesc, fetching, setFetching } = useAppContext();

  const download = () => {
    console.log("calling download");
    var element = document.createElement("a");
    element.href = poke.src;
    element.download = "poke-maker.png";
    element.click();
  };

  const generateDesc = () => {
    setDesc("Generating description...");
    createDesc(poke.src, setFetching, setDesc);
  };

  return (
    <div className={styles.container}>
      {poke ? (
        <>
          <div className={styles.pokeImg}>
            <img
              src={poke.src}
              alt="created pokemon"
              style={{ width: "200px" }}
            />
          </div>
          <div className={styles.statContainer}>
            <div className={styles.statBox}>
              <span className={styles.statName}>HP:</span>
              <span className={styles.statValue}>{poke.hp}</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statName}>Att:</span>
              <span className={styles.statValue}>{poke.attack}</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statName}>Def:</span>
              <span className={styles.statValue}>{poke.defense}</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statName}>SpA:</span>
              <span className={styles.statValue}>{poke.sp_attack}</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statName}>SpD:</span>
              <span className={styles.statValue}>{poke.sp_defense}</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statName}>Speed:</span>
              <span className={styles.statValue}>{poke.speed}</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statName}>Type:</span>
              <div className={styles.statBoxImage}>
                <Image
                  src={`/type_images/${poke.type}.png`}
                  alt={`${poke.type} emblem`}
                  height={25}
                  width={25}
                />
              </div>
              <div className={styles.statBoxImageMobile}>
                <Image
                  src={`/type_images/${poke.type}.png`}
                  alt={`${poke.type} emblem`}
                  height={15}
                  width={15}
                />
              </div>
              &nbsp; <span className={styles.statValue}>{poke.type}</span>
            </div>
            <button
              className={styles.dButton}
              onClick={() => {
                download();
              }}
            >
              Download
            </button>
          </div>

          <button
            className={styles.gButton}
            style={{ fontSize: "1.5rem" }}
            disabled={fetching}
            onClick={() => {
              generateDesc();
            }}
          >
            {fetching ? (
              <i className="fa fa-circle-o-notch fa-spin"></i>
            ) : (
              "Generate Description? (beta)"
            )}
          </button>
          {desc && (
            <div className={styles.statBox}>
              <p className={styles.statName}>{desc}</p>
            </div>
          )}
        </>
      ) : (
        <p className={styles.statName}>Create a Pokemon!</p>
      )}
    </div>
  );
};

PokeSummary.propTypes = {
  poke: PropTypes.object
};

export default PokeSummary;

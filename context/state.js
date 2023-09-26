import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [fetching, setFetching] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [hp, setHp] = useState(1);
  const [attack, setAttack] = useState(5);
  const [defense, setDefense] = useState(5);
  const [sp_attack, setSp_attack] = useState(10);
  const [sp_defense, setSp_defense] = useState(20);
  const [speed, setSpeed] = useState(5);
  const [type, setType] = useState("normal");
  const [storedInput, setStoredInput] = useState(null);
  const [desc, setDesc] = useState("");

  return (
    <AppContext.Provider
      value={{
        fetching,
        pokemon,
        storedInput,
        hp,
        attack,
        defense,
        sp_attack,
        sp_defense,
        speed,
        type,
        desc,
        setFetching,
        setPokemon,
        setStoredInput,
        setHp,
        setAttack,
        setDefense,
        setSp_attack,
        setSp_defense,
        setSpeed,
        setType,
        setDesc
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

AppWrapper.propTypes = {
  children: PropTypes.object
};

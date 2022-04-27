import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [fetching, setFetching] = useState(true);
  const [pokemon, setPokemon] = useState({});

  return (
    <AppContext.Provider
      value={{
        fetching,
        pokemon,
        setFetching,
        setPokemon
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

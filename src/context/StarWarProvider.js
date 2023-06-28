import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import StarWarContext from './StarWarContext';
import fetchApi from '../service/requestAPI';

function StarWarProvider({ children }) {
  // const [data, setData] = useState([]);
  const [dataPlanets, setDataPlanets] = useState([]);
  const [listPlanet, setListPlanet] = useState([]);
  const [search, setSearch] = useState([]);
  const [filterInput, setFilterInput] = useState([]);

  // useEffect(() => {
  //  fetchApi()
  //    .then((request) => request.filter((el) => delete el.residents))
  //    .then((response) => setData(response));
  //  setDataPlanets(data);
  // }, [data]);

  useEffect(() => {
    const api = fetchApi().results.filter((el) => delete el.residents);
    setDataPlanets(api);
  }, []);

  const value = useMemo(() => ({
    // data,
    search,
    setSearch,
    dataPlanets,
    setDataPlanets,
    listPlanet,
    setListPlanet,
    filterInput,
    setFilterInput,
  }), [search, dataPlanets, listPlanet, filterInput]);

  return (
    <StarWarContext.Provider value={ value }>
      {children}
    </StarWarContext.Provider>
  );
}

StarWarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarProvider;

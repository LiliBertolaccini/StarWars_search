import React, { useContext, useEffect, useState } from 'react';
import StarWarContext from '../context/StarWarContext';
import NumberFilter from './NumberFilter';
import StarWarsTopo from '../images/StarWars_topo.png';

function Forms() {
  const {
    dataPlanets,
    // setDataPlanets,
    search,
    setSearch,
    setListPlanet,
    listPlanet,
    setFilterInput,
    filterInput,
  } = useContext(StarWarContext);

  const columnPropriedade = [
    'População',
    'Órbita',
    'Diâmetro',
    'Período de Rotação',
    'Água',
  ];

  const [columnInput, setColumnInput] = useState(columnPropriedade);
  const [filterNumber, setFilterNumber] = useState({
    column: columnInput[0],
    comparison: 'maior que',
    value: 0,
  });
  const [sortList, setSortList] = useState({
    column: 'População',
    sort: 'ASC',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilterNumber((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (search.length > 0) {
      const dataSearch = dataPlanets.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase())
      );
      setListPlanet(dataSearch);
    } else {
      setListPlanet(dataPlanets);
    }
  }, [dataPlanets, search, setListPlanet]);

  useEffect(() => {
    setFilterNumber({
      column: columnInput[0],
      comparison: 'maior que',
      value: 0,
    });
  }, [columnInput, filterInput]);

  const handleClickFilter = () => {
    setColumnInput(columnInput.filter((item) => item !== filterNumber.column));
    setFilterInput((prev) => {
      const value = [...prev, filterNumber];
      setListPlanet(NumberFilter(listPlanet, value));
      console.log('1', listPlanet);
      return value;
    });
  };

  const handleClickSort = () => {
    const planetValue = listPlanet.filter(
      (el) => el[sortList.column] !== 'unknown'
    );
    const valueUnknown = listPlanet.filter(
      (el) => el[sortList.column] === 'unknown'
    );
    if (sortList.sort === 'ASC') {
      planetValue.sort((a, b) => +a[sortList.column] - +b[sortList.column]);
    } else {
      planetValue.sort((a, b) => +b[sortList.column] - +a[sortList.column]);
    }
    return setListPlanet([...planetValue, ...valueUnknown]);
  };

  return (
    <div>
      <img src={StarWarsTopo} alt="logo Star Wars" className="img-topo" />
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            data-testid="name-filter"
            name="search"
            placeholder="Nome do planeta"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
          <select
            data-testid="column-filter"
            name="column"
            id="column"
            onChange={handleChange}
            value={filterNumber.column}
          >
            {columnInput.map((el, i) => (
              <option value={el} key={i}>
                {el}
              </option>
            ))}
          </select>
          <select
            data-testid="comparison-filter"
            name="comparison"
            id="comparison"
            onChange={handleChange}
            value={filterNumber.comparison}
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input
            data-testid="value-filter"
            name="value"
            id="value"
            type="number"
            onChange={handleChange}
            value={filterNumber.value}
          />
          <button
            className="search-button"
            data-testid="button-filter"
            onClick={handleClickFilter}
          >
            Filtrar
          </button>
        </div>
        <div className="search-box2">
          {filterInput.map((el, index) => (
            <div key={index} data-testid="filter" className="search-filter-modal-box">
              <p className="search-filter-modal">{`${el.column} ${el.comparison} ${el.value}`}</p>
              <button
                type="button"
                className="search-filter-modal-button"
                name={el.column}
                data-testid={el.column}
                id={index}
                onClick={(e) => {
                  const filterqq = filterInput.filter(
                    (item) => item.column !== e.target.name
                  );
                  setFilterInput(filterqq);
                  const colunas = filterqq?.map((ite) => ite.column);
                  const option = columnPropriedade.filter(
                    (it) => !colunas.includes(it)
                  );
                  setColumnInput(option);
                  const qq1 = NumberFilter(dataPlanets, filterqq);
                  setListPlanet(qq1);
                }}
              >X </button>
            </div>
          ))}
          <div className="search-box">
          <select
            data-testid="column-sort"
            name="column-sort"
            id="column-sort"
            onChange={({ target }) => {
              setSortList({ ...sortList, column: target.value });
            }}
          >
            {columnPropriedade.map((el, i) => (
              <option value={el} key={i}>
                {el}
              </option>
            ))}
          </select>
          <p className="search-p">Ascendente</p>
          <input className="search-filter-input-asc-desc"
            type="radio"
            data-testid="column-sort-input-asc"
            value="ASC"
            name="ASC"
            id="ASC"
            checked={sortList.sort === 'ASC'}
            onChange={() => setSortList({ ...sortList, sort: 'ASC' })}
          />
          <p className="search-p">Descendente</p>
          <input className="search-filter-input-asc-desc"
            type="radio"
            data-testid="column-sort-input-desc"
            value="DESC"
            name="DESC"
            id="DESC"
            checked={sortList.sort === 'DESC'}
            onChange={() => setSortList({ ...sortList, sort: 'DESC' })}
          />
          <button
            className="search-button"
            data-testid="column-sort-button"
            type="button"
            onClick={handleClickSort}
          >
            Ordenar
          </button>
        </div>
        </div>
        <div className="search-box4">
          <button
            className="search-button-remover"
            onClick={() => {
              setFilterInput([]);
              setListPlanet(dataPlanets);
            }}
            type="button"
            data-testid="button-remove-filters"
          >
            Remover todas filtragens
          </button>
        </div>
      </div>
      <div className="search-line"></div>
    </div>
  );
}
export default Forms;

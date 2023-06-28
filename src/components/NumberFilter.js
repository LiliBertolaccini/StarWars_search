const NumberFilter = (listPlanet, filterInput) => {
  let list = listPlanet;
  filterInput?.forEach((element) => {
    const planetList = list.filter((el) => {
      if (element.comparison === 'maior que') {
        return +el[element.column] > +element.value;
      }
      if (element.comparison === 'menor que') {
        return +el[element.column] < +element.value;
      }
      if (element.comparison === 'igual a') {
        return +el[element.column] === +element.value;
      }
      return false;
    });
    list = planetList;
  });
  return list;
};
export default NumberFilter;

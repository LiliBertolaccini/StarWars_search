// const fetchApi = async () => {
//  const url = 'https://swapi.dev/api/planets';
//  const response = await fetch(url);
//  const data = await response.json();
//  return data.results;
// };
// export default fetchApi;

import mockList from '../tests/mock';

const fetchApi = () => mockList;

export default fetchApi;

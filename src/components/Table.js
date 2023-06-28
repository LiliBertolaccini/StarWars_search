import React, { useContext, useState } from 'react';
import StarWarContext from '../context/StarWarContext';
import Forms from './Forms';
import Planetas from './Planetas';

function Table() {
  const { listPlanet } = useContext(StarWarContext);
  const [planet, setPlanet] = useState("");
  return (
    <div>
      <Forms />
      <Planetas planet={planet}/>
      <table className='table'>
        <thead className='table-head'>
          <tr>
            <th>Planeta</th>
            <th>Rotação</th>
            <th>Órbita</th>
            <th>Diâmetro</th>
            <th>Clima</th>
            {/*<th>Gravity</th>
            <th>Terrain</th>*/}
            <th>Água</th>
            <th>População</th>
            <th>Filmes/Séries</th>
            {/*<th>Created</th>
            <th>Edited</th>
            <th>URL</th>*/}
          </tr>
        </thead>
        <tbody>
          {
            listPlanet && listPlanet
              .map((planet) => (
                <tr key={ planet.name }>

                  <td data-testid="planet-name">
                    <button
                    type = "button"
                    onClick = { () => {setPlanet(planet.name);
                    } }
                    >{ planet.name }</button>
                    </td>

                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  {/*<td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>*/}
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  {/*<td>{ planet.created }</td>
                  <td>{ planet.edited}</td>
                  <td>{ planet.url }</td>*/}
                </tr>
              ))
          }
        </tbody>
      </table>
      <footer>
        <p>Referências:</p>
        <ul>
          <li>https://starwars.fandom.com/</li>
          <li>https://www.imdb.com/</li>
        </ul>
      </footer>
    </div>
  );
}

export default Table;

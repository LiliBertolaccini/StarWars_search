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
            <th>Terrain</th>
            <th>Água</th>
            <th>População</th>
          </tr>
        </thead>
        <tbody>
          {
            listPlanet && listPlanet
              .map((planet) => (
                <tr key={ planet.name }>
                  <td data-testid="planet-name">
                    <p
                    className="planet-name"
                    onClick={() => {
                      setPlanet(planet.name);
                    }}                    
                    >{ planet.name }</p>
                    </td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  {/*<td>{ planet.edited}</td>
                  <td>{ planet.url }</td>*/}
                </tr>
              ))
          }
        </tbody>
        </table>

        <footer className="footer-box">
          <div className="footer-content">
    <div className="footer-div-ref">
      <ul className="footer-list">
      <p className="footer-ref">Referências:</p>
      <li><a href="https://starwars.fandom.com/pt" target="_blank" rel="noreferrer" className="footer-link">Star Wars Fandom</a></li>
      <li><a href="https://www.imdb.com/" target="_blank" rel="noreferrer" className="footer-link">IMDB</a></li>
    </ul>
    </div>
    <div className="footer-div-contato">
      <p className="footer-contato">Contato:</p>
      <ul className="footer-list">
      <li><a href="https://github.com/LiliBertolaccini" target="_blank" rel="noreferrer" className="footer-link">GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/lilian-barros-bertolaccini/" target="_blank" rel="noreferrer" className="footer-link">Linkedin</a></li>
    </ul>
    </div>
    </div>
  </footer>

    </div>
  );
}

export default Table;

import React from "react";
import SWdata from "../data/SWdata";

export default function Planetas(planet) {
    //const filmes = () => { SWdata.map((el) => console.log(el))};
  //console.log(Planetas);
  //console.log(SWdata[0].filmes);
  return (
    <>
      {SWdata.map((el, i) =>
        el.name === planet.planet ? (
          <div>
            <h2>{el.name}</h2>
            <h2>{el.Information}</h2>
            <h2>{el.image}</h2>
            {el.filmes.map((filme, i) => (
              <div>
                <h2>{filme.titulo}</h2>
                <h2>{filme.capaDoFilme}</h2>
                <h2>{filme.sinopse}</h2>
              </div>
            ))}
          </div>
        ) : null
        )}

              {/*{SWdata.map((el, i) =>
        el.filmes && el.filmes.length > 0 ? (
          <div key={i}>
            {el.filmes.map((filme, j) => (
              <div key={j}>
                <h2>{filme.titulo}</h2>
                <h2>{filme.capaDoFilme}</h2>
                <h2>{filme.sinopse}</h2>
              </div>
            ))}
          </div>
        ) : null
      )}*/}
      {/*{SWdata.map((el, i) =>
        el.filmes === planet.planet ? (
          <div>
            <h2>{el.filmes.titulo}</h2>
            <h2>{el.filmes.capaDoFilme}</h2>
            <h2>{el.filmes.sinopse}</h2>
          </div>
        ) : null
      )}*/}
        {/*{SWdata.map((el, i) => el.filmes === planet.planet ? (
          <div>
            <h2>{el.titulo}</h2>
            <h2>{el.capaDoFilme}</h2>
            <h2>{el.sinopse}</h2>
          </div>
        ) : null
        )}*/}
              {/*{SWdata.map((el, i) =>
        el.filmes && el.filmes.titulo === planet.planet ? (
          <div key={i}>
            <h2>{el.filmes.titulo}</h2>
            <h2>{el.filmes.capaDoFilme}</h2>
            <h2>{el.filmes.sinopse}</h2>
          </div>
        ) : null
      )}*/}
    </>
  );
}

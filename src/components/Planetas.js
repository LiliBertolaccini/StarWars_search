import React, { useState, useEffect } from "react";
import SWdata from "../data/SWdata";
import Filme from "./Filme";

export default function Planetas(planet) {
  const [movie, setMovie] = useState();
  const [closePlanet, setClosePlanet] = useState();

  useEffect(() => {
    setClosePlanet(planet.planet);
  }, [planet]);
  //console.log(SWdata[0]);
  return (
    <>
      <Filme movie={movie} />
      {SWdata.map((el, i) =>
        el.name === closePlanet ? (
          <div key={i} className="planetas-container">
            <p className="modal-closeButton" onClick={() => setClosePlanet()}>X</p>
            <img src={el.image} alt={el.name} className="img-planeta" />
            <h1 className="planeta-h1">{el.name}</h1>
            <div className="planetas-box">
              <h2 className="planeta-h2">Caracteristicas:</h2>
              <h3 className="planeta-h3">{el.Information}</h3>
            </div>
            <h2 className="planeta-h2">Filmes:</h2>
            <div key={i} className="filmes">
              {el.filmes.map((filme, i) => (
                <div className="filmes-box" onClick={() => {
                  setMovie(filme);
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                } }>
                  <div className="filme-titulo">
                    <h4 className="planeta-h4">{filme.titulo}</h4>
                    <h4 className="planeta-h4">{filme.titulo2}</h4>
                  </div>
                  <div className="planeta-capa">
                    <img
                      src={filme.capaDoFilme}
                      alt={filme.titulo}
                      className="img-capaFilme"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </>
  );
}

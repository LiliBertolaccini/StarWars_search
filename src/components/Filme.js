import React, { useState, useEffect } from "react";


export default function Filme({movie}) {
  const [closeMovie, setCloseMovie] = useState();

  useEffect(() => {
    setCloseMovie(movie)
  }, [movie]);
  console.log(movie);
  return (
    <div>
  {
    !closeMovie ? null : (
      <div className="modal-background">
    <div className="modal-container">
      <p className="modal-closeButton" onClick={()=>{setCloseMovie()}}>X</p>
          <h2 className="modal-h2">{closeMovie.titulo}</h2>
          <h2 className="modal-h2">{closeMovie.titulo2}</h2>

          <div className="modal-imgBox">
          <img src={closeMovie.capaDoFilme2} alt="capa do filme" className="modal-img" />
          {closeMovie.trailer}
          </div>

          <div className="modal-sinospe">
          <h3 className="modal-h3">Sinopse:</h3>
          <p className="modal-p">{closeMovie.sinopse}</p>
          </div>
    </div>
    </div> 
    )
  }
  </div>
  );
}

import React, { useContext } from "react";
import GameContext from "../context/gameContext";

const Result = () => {
  const gameContext = useContext(GameContext);
  const { userResult, computerResult,nbJeu } = gameContext.gameState;
  
  let result = null;

  if (userResult === nbJeu) {
    result = (
      <div className="result bg-success text-light d-flex">
        Vous avez Gagné !
      </div>
    );
  }
  if (computerResult === nbJeu) {
    result = <div className="result bg-error text-light d-flex">Perdu...</div>;
  }

  return <div>{result}</div>;
};

export default Result;

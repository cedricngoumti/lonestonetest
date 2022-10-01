import React, { useContext } from "react";
import GameContext from "../context/gameContext";
import Confetti from "react-confetti";

const Result = () => {
  const gameContext = useContext(GameContext);
  const { userResult, computerResult, nbJeu } = gameContext.gameState;

  let result = null;

  if (userResult === nbJeu) {
    result = (
      <>
        <Confetti />
        <h1 className="result success">Vous avez Gagné !</h1>
      </>
    );
  }
  if (computerResult === nbJeu) {
    result = <div className="result">Perdu...</div>;
  }

  return (
    <>
      <div>{result}</div>
    </>
  );
};

export default Result;

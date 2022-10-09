import React, { useContext, useEffect } from "react";
import GameContext from "../../context/gameContext";
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

  useEffect(() => {
    if (userResult === nbJeu) {
      gameContext.gameDispatch({
        type: "add_history",
        payload: `Victoire :  ${userResult} vs ${computerResult}`,
      });
    }
    if (computerResult === nbJeu) {
      gameContext.gameDispatch({
        type: "add_history",
        payload: `Défaite  : ${userResult} vs ${computerResult}`,
      });
    }
  }, [userResult, computerResult]);

  return (
    <>
      <div>{result}</div>
    </>
  );
};

export default Result;

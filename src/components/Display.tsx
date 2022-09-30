import React, { useContext } from "react";
import pierre from "../assets/images/pierre.png";
import feuille from "../assets//images/feuille.png";
import ciseaux from "../assets/images/ciseaux.png";
import GameContext from "../context/gameContext";

interface Props {
  userChoice: number;
  computerChoice: number;
  
}

const Display = ({ userChoice, computerChoice }: Props) => {
  const gameContext = useContext(GameContext);
  const {userResult,computerResult} = gameContext.gameState
  const userImage = (
    <img
      className="img-responsive"
      src={
        userChoice === 0
          ? pierre
          : userChoice === 1
          ? feuille
          : userChoice === 2
          ? ciseaux
          : undefined
      }
      alt="Objet joué"
    />
  );

  const computerImage = (
    <img
      className="img-responsive computer"
      src={
        computerChoice === 0
          ? pierre
          : computerChoice === 1
          ? feuille
          : computerChoice === 2
          ? ciseaux
          : undefined
      }
      alt="Objet joué"
    />
  );

  return (
    <div className="columns">
      <div className="column col-2 col-mx-auto text-center">
        <h1 id="user">VOUS</h1>
        <h2>{userResult}</h2>
        {userChoice !== -1 && userImage}
      </div>

      <div className="column col-2 col-mx-auto text-center">
        <h1 id="computer" className="computer">
          ORDINATEUR       </h1>
        <h2 className="computer">{computerResult}</h2>
        {computerChoice !== -1 && computerImage}
      </div>
    </div>
  );
};

export default Display;

import React, { useContext } from "react";
import pierre from "../../assets/pierre.png";
import feuille from "../../assets/feuille.png";
import ciseaux from "../../assets/ciseaux.png";
import GameContext from "../../context/gameContext";


const Display = () => {
  const gameContext = useContext(GameContext);
  const { userResult, computerResult,userChoice, computerChoice  } = gameContext.gameState;
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
    <>
      <div className="score">
        <p>Vous</p>
        <p>Ordinateur</p>
        <p className="score-joueur">{userResult}</p>
        <p className="score-ordinateur">{computerResult}</p>
        <div className="reset">vs</div>
      </div>
      <div className="action">
        <p className="message">A vous de jouer !</p>
      </div>

      <div className="choix" style={{ paddingBottom: "10px" }}>
        <div >
          {userChoice !== -1 && userImage}
        </div>

        <div >
          {computerChoice !== -1 && computerImage}
        </div>
      </div>
    </>
  );
};

export default Display;

import React, { useContext } from "react";
import pierre from "../assets/pierre.png";
import feuille from "../assets/feuille.png";
import ciseaux from "../assets/ciseaux.png"
import GameContext from "../context/gameContext";

interface Props {
  userChoice: number;
  computerChoice: number;
  
}

const Display = ({userChoice, computerChoice}:Props) => {
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
    <>
      <div className="score">
        <p>Vous</p>
        <p>Ordinateur</p>
        <p id="score-joueur">{userResult}</p>
        <p id="score-ordinateur">{computerResult}</p>
        <div id="reset">Recommencer</div>
      </div>
      <div className="action">
        <p id="message">A vous de jouer !</p>
        <div id="next">Tour suivant</div>
      </div>
    
    <div className="choix" style={{paddingBottom:'10px'}}>
      <div className="column col-2 col-mx-auto text-center">
        
        {userChoice !== -1 && userImage}
      </div>

      <div className="column col-2 col-mx-auto text-center">
        
        {computerChoice !== -1 && computerImage}
      </div>
  </div>
  </>
  );
};

export default Display;

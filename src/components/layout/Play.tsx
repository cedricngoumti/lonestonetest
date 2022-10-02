import React,{useContext} from "react";
import GameContext from "../../context/gameContext";
import Button from "../ui/Button";

const Play = () => {
  const gameContext = useContext(GameContext);
  
  
  const setChoice = (value: string) => {
    const userChoice1 = value === "Pierre" ? 0 : value === "Feuille" ? 1 : 2;
    const computerChoice1 = Math.floor(Math.random() * 3);

    gameContext.gameDispatch({
      type: "user_choose",
      payload: userChoice1,
    });
    gameContext.gameDispatch({
      type: "computer_choose",
      payload: computerChoice1,
    });

    if (
      (computerChoice1 === 0 && userChoice1 === 2) ||
      (computerChoice1 === 1 && userChoice1 === 0) ||
      (computerChoice1 === 2 && userChoice1 === 1)
    ) {
      gameContext.gameDispatch({
        type: "computer_win",
      });
    } else if (computerChoice1 !== userChoice1) {
      gameContext.gameDispatch({
        type: "you_win",
      });
    }

    
  };

    
  const handleChoice = (e: any) => {
    const value = e.target.textContent;
    setChoice(value);
  };

  return (
    <>
        <div className="jeu">
          <div className="choix">
            <Button onClick={handleChoice}>
              <img src="./assets/icons/pierre.png" alt="pierre" />
              <p>Pierre</p>
            </Button>
            <Button onClick={handleChoice}>
              <img src="./assets/icons/feuille.png" alt="feuille" />
              <p>Feuille</p>
            </Button>
            <Button onClick={handleChoice}>
              <img src="./assets/icons/ciseaux.png" alt="ciseaux" />
              <p>Ciseaux</p>
            </Button>
          </div>
        </div>
    </>
  );
};

export default Play;

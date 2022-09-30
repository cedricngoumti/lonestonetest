import React from "react";
import Button from "./ui/Button";

interface Props {
  setChoice: (e: any) => void;
}

const Play = ({ setChoice }: Props) => {
    
  const handleChoice = (e: any) => {
    const value = e.target.textContent;
    console.log(value)
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

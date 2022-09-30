import React, { useState, useEffect, useContext } from "react";
import Display from "../components/Display";
import Play from "../components/Play";
import Result from "../components/Result";
import GameContext from "../context/gameContext";

const Home = () => {
  const gameContext = useContext(GameContext);
  const {userResult, computerResult,nbJeu} = gameContext.gameState
  const [userChoice, setUserChoice] = useState<number>(-1);
  const [computerChoice, setComputerChoice] = useState<number>(-1);
  const [onPause, setOnPause] = useState<boolean>(false);
  const [round, setRound] = useState<number>(0);

  const setChoice = (value: string) => {
    const userChoice1 = value === "Pierre" ? 0 : value === "Feuille" ? 1 : 2;
    const computerChoice1 = Math.floor(Math.random() * 3);
    setUserChoice(userChoice1);
    setComputerChoice(computerChoice1);
    if (
      (computerChoice1 === 0 && userChoice1 === 2) ||
      (computerChoice1 === 1 && userChoice1 === 0) ||
      (computerChoice1 === 2 && userChoice1 === 1)
    ) {
      //setComputerResult(prevStep => prevStep + 1)
      setRound((prevStep) => prevStep + 1);
      gameContext.gameDispatch({
        type: "computer_win",
      });
    } else if (computerChoice1 !== userChoice1) {
      //setUserResult(prevStep => prevStep + 1)
      setRound((prevStep) => prevStep + 1);
      gameContext.gameDispatch({
        type: "you_win",
      });
    }
  };

  useEffect(() => {
    if (userResult === nbJeu || computerResult === nbJeu) {
      
      setOnPause(true);
      setTimeout(() => {
        gameContext.gameDispatch({
          type:'reset_game'
        })
        
        setUserChoice(-1);
        setComputerChoice(-1);
        setOnPause(false);
      }, 2500);
    }
  }, [userResult, computerResult]);

  return (
    <div className="App">
      {!onPause && <Play setChoice={setChoice} />}

      <Result />

      <Display userChoice={userChoice} computerChoice={computerChoice} />
    </div>
  );
};

export default Home;

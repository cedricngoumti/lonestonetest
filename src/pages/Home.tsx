import React, { useState, useEffect, useContext } from "react";
import Logo from "../assets/Logo";
import Display from "../components/Display";
import Play from "../components/Play";
import Result from "../components/Result";
import GameContext from "../context/gameContext";

const Home = () => {
  const gameContext = useContext(GameContext);
  const { userResult, computerResult, nbJeu } = gameContext.gameState;
  const [userChoice, setUserChoice] = useState<number>(0);
  const [computerChoice, setComputerChoice] = useState<number>(0);
  const [onPause, setOnPause] = useState<boolean>(false);
  const [round, setRound] = useState<number>(0);

  const setChoice = (value: string) => {
    const userChoice1 = value === "Pierre" ? 0 : value === "Feuille" ? 1 : 2;
    const computerChoice1 = Math.floor(Math.random() * 3);
    gameContext.gameDispatch({
      type: "play",
      payload: {
        userChoice: userChoice1,
        computerChoice: computerChoice1,
      },
    });

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
          type: "reset_game",
        });

        setUserChoice(0);
        setComputerChoice(0);
        setOnPause(false);
      }, 2500);
    }
  }, [userResult, computerResult]);

  return (
    <div className="App">
      
      <div className="logo">
        <div style={{ width: "200px", alignSelf: "center" }}>
          <Logo />
        </div>
      </div>
      <div className="main">
        <Display userChoice={userChoice} computerChoice={computerChoice} />
        <Result />
        {!onPause && <Play setChoice={setChoice} />}
      </div>
      {/*<Display userChoice={userChoice} computerChoice={computerChoice} />*/}
    </div>
  );
};

export default Home;

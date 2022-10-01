import React, { useState, useEffect, useContext } from "react";
import Logo from "../assets/Logo";
import Display from "../components/Display";
import Play from "../components/Play";
import Result from "../components/Result";
import GameContext from "../context/gameContext";

const Home = () => {
  const gameContext = useContext(GameContext);
  const { userResult, computerResult, nbJeu } =
    gameContext.gameState;

  const [onPause, setOnPause] = useState<boolean>(false);

  useEffect(() => {
    if (userResult === nbJeu || computerResult === nbJeu) {
      setOnPause(true);
      setTimeout(() => {
        gameContext.gameDispatch({
          type: "reset_game",
        });
        setOnPause(false);
      }, 7000);
    }
  }, [userResult, computerResult,nbJeu,gameContext]);

  return (
    <div className="App">
      <div className="logo">
        <div style={{ width: "200px", alignSelf: "center" }}>
          <Logo />
        </div>
      </div>
      <div className="main">
        <Display />
        <Result />
        {!onPause && <Play />}
      </div>
    </div>
  );
};

export default Home;

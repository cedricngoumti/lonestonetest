import React, { useReducer } from "react";
import {
  GameContextProvider,
  gameReducer,
  inistialState,
} from "./context/gameContext";
import Home from "./pages/Home";
import "./App.css";
import Logo from "./assets/Logo";
import Button from "./components/ui/Button"
import Confetti from "react-confetti";
import Result from "./components/Result";
import Display from "./components/Display";
import Play from "./components/Play";

const App = () => {
  const [gameState, gameDispatch] = useReducer(gameReducer, inistialState);
  const { innerWidth, innerHeight } = window;
  const gameContextValues = {
    gameState,
    gameDispatch,
  };

  return (
    <GameContextProvider value={gameContextValues}>
            <Confetti width={innerWidth} height={innerHeight} />

      <Home />
    </GameContextProvider>
  );
};

export default App;

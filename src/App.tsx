import React, { useReducer } from "react";
import {
  GameContextProvider,
  gameReducer,
  inistialState,
} from "./context/gameContext";
import "spectre.css";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  const [gameState, gameDispatch] = useReducer(gameReducer, inistialState);

  const gameContextValues = {
    gameState,
    gameDispatch,
  };

  return (
    <GameContextProvider value={gameContextValues}>
      <div>
        <Home />
      </div>
    </GameContextProvider>
  );
};

export default App;

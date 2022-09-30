import React, { createContext } from "react";

const NB_TOUR: number = 3;

export interface GameState {
  userResult: number;
  computerResult: number;
  userChoice: number;
  computerChoice: number;
  nbJeu: number;
  onPause: boolean;
}

export interface GameActions {
  type: "you_win" | "computer_win" | "reset_game" | "play";
  payload?: {
    userChoice?: number;
    computerChoice?: number;
  };
}

export const inistialState: GameState = {
  userResult: 0,
  computerResult: 0,
  userChoice: -1,
  computerChoice: -1,
  nbJeu: NB_TOUR,
  onPause: false,
};

export const gameReducer = (state: GameState, action: GameActions) => {
  const item = action?.payload 
  const items = { ...state };

  switch (action?.type) {
    case "play":
      
      return {
        ...state,
       userChoice:items?.userChoice,
       computerChoice:items?.computerChoice
      };
    case "you_win":
      return { ...state, userResult: items.userResult + 1 };
    case "computer_win":
      return { ...state, computerResult: items.computerResult + 1 };
    case "reset_game":
      return {
        ...state,
        userResult: 0,
        computerResult: 0,
        userChoice: 0,
        computerChoice: 0,
        onPause: false,
      };
    default:
      return state;
  }
};

export interface GameContextProps {
  gameState: GameState;
  gameDispatch: React.Dispatch<GameActions>;
}

const GameContext = createContext<GameContextProps>({
  gameState: inistialState,
  gameDispatch: () => {},
});

export const GameContextConsumer = GameContext.Consumer;
export const GameContextProvider = GameContext.Provider;
export default GameContext;

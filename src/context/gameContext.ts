import React, { createContext } from "react";

const NB_TOUR: number = 3;

export interface GameState {
  userResult: number;
  userChoice: number;
  computerChoice: number;
  computerResult: number;
  nbJeu: number;
  history: string[];
}

export interface GameActions {
  type:
    | "you_win"
    | "computer_win"
    | "reset_game"
    | "add_history"
    | "user_choose"
    | "computer_choose";
  payload?: string | number;
}

export const inistialState: GameState = {
  userResult: 0,
  userChoice: 0,
  computerChoice: 0,
  computerResult: 0,
  nbJeu: NB_TOUR,
  history: [],
};

export const gameReducer = (state: GameState, action: GameActions) => {
  const items = { ...state };

  switch (action.type) {
    case "user_choose":
      return { ...state, userChoice: action.payload as number };
    case "computer_choose":
      return { ...state, computerChoice: action.payload as number };
    case "you_win":
      return { ...state, userResult: items.userResult + 1 };
    case "computer_win":
      return { ...state, computerResult: items.computerResult + 1 };
    case "add_history": {
      return {
        ...state,
        history: [...state.history, action.payload as string],
      };
    }
    case "reset_game":
      return {
        ...state,
        userResult: 0,
  userChoice: 0,
  computerChoice: 0,
  computerResult: 0,
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

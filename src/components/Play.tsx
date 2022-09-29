import React from "react";

interface Props {
  setChoice: (e: any) => void;
}

const Play = ({ setChoice }: Props) => {
    
  const handleChoice = (e: any) => {
    const value = e.target.textContent;
    setChoice(value);
  };

  return (
    <div className="btn-group btn-group-block">
      <button className="btn btn-success" onClick={handleChoice}>
        Pierre
      </button>
      <button className="btn btn-success" onClick={handleChoice}>
        Feuille
      </button>
      <button className="btn btn-success" onClick={handleChoice}>
        Ciseaux
      </button>
    </div>
  );
};

export default Play;

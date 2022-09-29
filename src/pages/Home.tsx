import React, { useEffect, useState } from "react";
import Display from "../components/Display";
import Play from "../components/Play";
import Result from "../components/Result";

const Home = () => {
  const [userResult, setUserResult] = useState<number>(0);
  const [computerResult, setComputerResult] = useState<number>(0);
  const [userChoice, setUserChoice] = useState<number>(-1);
  const [computerChoice, setComputerChoice] = useState<number>(-1);
  const [onPause, setOnPause] = useState<boolean>(false);
  const [round, setRound] = useState<number>(0);

  const compareChoice = () => {
  
    if (
      (computerChoice === 0 && userChoice === 2) ||
      (computerChoice === 1 && userChoice === 0) ||
      (computerChoice === 2 && userChoice === 1)
    ) {
        setComputerResult(prevStep => prevStep + 1)
        setRound(prevStep => prevStep + 1)
        newRound()
        
    } else if (computerChoice !== userChoice) {
        setUserResult(prevStep => prevStep + 1)
        setRound(prevStep => prevStep + 1)
        newRound()
        console.log('choice2')
      
    }
  };

  const setChoice = (value: string) => {
    setUserChoice(value === "Pierre" ? 0 : value === "Feuille" ? 1 : 2);
    setComputerChoice(Math.floor(Math.random() * 3));
    
    compareChoice();
  };

  const newRound = () => {
    if (userResult === 3 || computerResult === 3) {
      setOnPause(true);
      setTimeout(() => {
        setUserResult(0);
        setComputerResult(0);
        setUserChoice(-1);
        setComputerChoice(-1);
        setOnPause(false);
      }, 2500);
    }
  };

  useEffect(()=>{
    
  },[])

  return (
    <div className="App">
      {!onPause && <Play setChoice={setChoice} />}

      <Result
        userResult={userResult}
        computerResult={computerResult}
      />

      <Display
        userResult={userResult}
        computerResult={computerResult}
        userChoice={userChoice}
        computerChoice={computerChoice}
      />
    </div>
  );
};

export default Home;

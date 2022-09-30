import React, {  useState } from "react";
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

 

  const setChoice = (value: string) => {
    const userChoice1 = value === "Pierre" ? 0 : value === "Feuille" ? 1 : 2
    const computerChoice1  = Math.floor(Math.random() * 3)
    setUserChoice(userChoice1);
    setComputerChoice(computerChoice1);

    if (
        (computerChoice1 === 0 && userChoice1 === 2) ||
        (computerChoice1 === 1 && userChoice1 === 0) ||
        (computerChoice1 === 2 && userChoice1 === 1)
      ) {
          setComputerResult(prevStep => prevStep + 1)
          setRound(prevStep => prevStep + 1)
            
      } else if (computerChoice1 !== userChoice1) {
          setUserResult(prevStep => prevStep + 1)
          setRound(prevStep => prevStep + 1)
          
      }
      newRound() 
  };

  const newRound = () => {
    if (userResult === 2 || computerResult === 2) {
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

import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGamestarted,setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGamestarted ?  <GamePlay/> : <StartGame toggle={toggleGamePlay} /> } </>
  );
}

export default App

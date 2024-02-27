import Intro from "./components/Intro";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";

function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 3500); // 2000ms = 5s

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>{introDone ? <Hero /> : <Intro />}</div>
    // if introDone = true, return Hero else return Intro
  );
}

export default App;

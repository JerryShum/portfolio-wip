import Intro from "./layout/Intro";
import Hero from "./layout/Hero";
import { useEffect, useState } from "react";

function App() {
  // Defining states for App component (initially set to false)
  const [introDone, setIntroDone] = useState(false);

  // useEffect runs after every re-render, [] means that useEffect only runs after mount and dismount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 3500); // 3500ms = 3.5s
    // After mount, change state to true after 3.5 s
    // Change in state causes a re-render, -> state =true -> render Hero instead of intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
        {introDone ? (
          <div>
            <Hero />
            <Hero />
          </div>
        ) : (
          <Intro />
        )}
      </div>
      {/* // if introDone = true, return everything but the intro else return Intro
    // Intro -> state change -> render Hero after */}
    </div>
  );
}

export default App;

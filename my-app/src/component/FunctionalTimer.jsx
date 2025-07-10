import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    console.log(interval, "Timer started");

    return () => clearInterval(interval);
  }, []);

  return <h1>Timer: {seconds} seconds</h1>;
}

export default Timer;
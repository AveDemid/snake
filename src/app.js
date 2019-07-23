import React, { useCallback, useState } from "react";
import { GlobalStyles } from "./global-styles";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(prevState => prevState + 1);
  }, []);

  return (
    <>
      <GlobalStyles />
      <h1>{counter}</h1>

      <button onClick={increment}>Increment</button>
    </>
  );
};

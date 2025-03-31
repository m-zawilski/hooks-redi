import { useEffect, useState } from "react";

interface Joke {
  setup: string;
  punchline: string;
}

const UseEffectExercise = () => {
  // 1. Implement the counter
  // 2. Fetch a random joke when the count reaches a multiple of 5
  // [EXTRA] 3. Add an useEffect cleanup in case you leave the component before the fetch succeeds
  // [EXTRA] 4. Add a loading state

  const [count, setCount] = useState(0);
  const [joke, setJoke] = useState<Joke | null>(null);

  // fetch("https://official-joke-api.appspot.com/jokes/random")
  useEffect(() => {
    // TODO
  }, [count]);

  const increment = () => {
    // TODO
  };

  const decrement = () => {
    // TODO
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {joke && (
        <div>
          <h2>Random Joke</h2>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
      )}
    </div>
  );
};

export default UseEffectExercise;

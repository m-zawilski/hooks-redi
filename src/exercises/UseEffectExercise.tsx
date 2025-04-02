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

  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [joke, setJoke] = useState<Joke | null>(null);

  // fetch("https://official-joke-api.appspot.com/jokes/random")
  useEffect(() => {
    if (count % 5 === 0 && count !== 0) {
      setLoading(true);
      fetch("https://official-joke-api.appspot.com/jokes/random")
        .then((response)=>(response.json()))
        .then(data=> {
          setJoke(data)
          setLoading(false)
        })

    }

  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {loading && <p>Loading...</p>}
      {joke && !loading && (
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

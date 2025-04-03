import { useEffect, useState } from "react";

interface Joke {
  setup: string;
  punchline: string;
}

const UseEffectExercise = () => {
  // 1. Implement the counter
  // 2. Fetch a random joke when the count reaches a multiple of 5
  // [EXTRA] 3. Add an useEffect cleanup in case you leave the component before the fetch succeeds
  // [EXTRA] 4. Add a loading state (a way of telling the user that we're waiting for the joke to load)

  const [count, setCount] = useState(0);
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // fetch("https://official-joke-api.appspot.com/jokes/random")
  useEffect(() => {
    let isMounted = true;

    const getJoke = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        if (!response.ok) {
          setLoading(false);
          throw new Error(`Response status ${response.status}`);
        }

        const json = await response.json();
        if(isMounted) {
          setJoke(json);
          setLoading(false);
        }
      
      }   
      catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (count % 5 === 0 && count !== 0) {
      getJoke();
    }

    return () => {
      isMounted = false;
    }
  }, [count]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {loading ? <div>Loading....</div> :
      joke && (
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

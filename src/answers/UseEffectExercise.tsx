import { useEffect, useState } from "react";

interface Joke {
  setup: string;
  punchline: string;
}

const UseEffectExercise = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [joke, setJoke] = useState<Joke | null>(null);

  // Fetch a random joke when the count reaches a multiple of 5
  useEffect(() => {
    let isMounted = true; // Flag to track if the component is still mounted

    const fetchJoke = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://official-joke-api.appspot.com/jokes/random"
        );
        const data = await response.json();
        if (isMounted) {
          setJoke(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching joke:", error);
        setIsLoading(false);
      }
    };

    if (count % 5 === 0 && count !== 0) {
      fetchJoke();
    }

    // Cleanup function to set the flag to false when the component unmounts
    return () => {
      isMounted = false;
      console.log("Component unmounted or count changed");
    };
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
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        joke && (
          <div>
            <h2>Random Joke</h2>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        )
      )}
    </div>
  );
};

export default UseEffectExercise;

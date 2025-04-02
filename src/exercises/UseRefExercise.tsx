import { useRef } from "react";

function UseRefExercise() {
  // Add a button that allows the user to put focus on the input
  // use HTMLInputElement as useRef type
  // use the focus() method of the HTMLInputElement DOM node

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h2>useRef Exercise</h2>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={() => {
        if(inputRef.current) {
         inputRef.current.focus()
        }
      }
      }>Click to Focus Input</button>
    </div>
  );
}

export default UseRefExercise;

import { useRef } from "react";

function UseRefExercise() {
  // Add a button that allows the user to put focus on the input
  // use HTMLInputElement as useRef type
  // use the focus() method of the HTMLInputElement DOM node
  const inputRef = useRef<HTMLInputElement>(null)

  const focus = () => {
    inputRef.current?.focus();
  }

  return (
    <div>
      <h2>useRef Exercise</h2>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <br /><br />
      <button onClick={(focus)}>Put focus!</button>
    </div>
  );
}

export default UseRefExercise;

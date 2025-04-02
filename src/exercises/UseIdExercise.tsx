import { useId } from "react";

function UseIdElement({ label }: { label: string }) {
  // Add HTML id to the input and connect the label and the input
  // Inspect the result in the browser DevTools

  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </div>
  );
}

function UseIdExercise() {
  return (
    <div>
      <h2>useId Exercise</h2>
      <UseIdElement label="First Name" />
      <UseIdElement label="Last Name" />
    </div>
  );
}

export default UseIdExercise;

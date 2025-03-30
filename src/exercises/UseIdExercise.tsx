function UseIdElement({ label }: { label: string }) {
  // Add HTML id to the input and connect the label and the input
  // Inpect the result in the browser DevTools

  return (
    <div>
      <label htmlFor="to_be_changed">{label}</label>
      <input id="to_be_changed" type="text" />
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

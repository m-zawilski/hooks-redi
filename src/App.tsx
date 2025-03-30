import "./app.css";
import CustomHookExample from "./examples/CustomHookExample";
import UseCallbackExample from "./examples/UseCallbackExample";
import UseContextExample from "./examples/UseContextExample";
import UseMemoExample from "./examples/UseMemoExample";
import UseRefExample from "./examples/UseRefExample";
import UseEffectExercise from "./exercises/UseEffectExercise";
import UseIdExercise from "./exercises/UseIdExercise";
import UseRefExercise from "./exercises/UseRefExercise";

function App() {
  return (
    <div className="column">
      <UseEffectExercise />
      <UseContextExample />
      <UseRefExample />
      <UseMemoExample />
      <UseCallbackExample />
      <UseRefExercise />
      <UseIdExercise />
      <CustomHookExample />
      {/* <CustomHookExercise /> */}
    </div>
  );
}

export default App;

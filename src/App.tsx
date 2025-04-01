import { JSX, useState } from "react";
import "./app.css";
import CustomHookExample from "./examples/CustomHookExample";
import UseCallbackExample from "./examples/UseCallbackExample";
import UseContextExample from "./examples/UseContextExample";
import UseMemoExample from "./examples/UseMemoExample";
import UseRefExample from "./examples/UseRefExample";
import CustomHookExercise from "./exercises/CustomHookExercise";
import UseContextExercise from "./exercises/UseContextExercise";
import UseEffectExercise from "./exercises/UseEffectExercise";
import UseIdExercise from "./exercises/UseIdExercise";
import UseRefExercise from "./exercises/UseRefExercise";

type Page =
  | "useEffectExercise"
  | "useContextExample"
  | "useContextExercise"
  | "useRef"
  | "useMemo"
  | "useCallback"
  | "useRefExercise"
  | "useIdExercise"
  | "customHook"
  | "customHookExercise";

function App() {
  const [currentComponent, setCurrentComponent] =
    useState<Page>("useEffectExercise");

  const componentMap: Record<Page, JSX.Element> = {
    useEffectExercise: <UseEffectExercise />,
    useContextExample: <UseContextExample />,
    useContextExercise: <UseContextExercise />,
    useRef: <UseRefExample />,
    useRefExercise: <UseRefExercise />,
    useMemo: <UseMemoExample />,
    useCallback: <UseCallbackExample />,
    useIdExercise: <UseIdExercise />,
    customHook: <CustomHookExample />,
    customHookExercise: <CustomHookExercise />,
  };

  return (
    <div>
      <div className="row">
        {(Object.keys(componentMap) as Page[]).map((componentName) => (
          <button
            key={componentName}
            onClick={() => setCurrentComponent(componentName)}
            style={{
              color: componentName.includes("Exercise")
                ? "darkred"
                : "darkblue",
            }}
          >
            {componentName}
          </button>
        ))}
      </div>

      <div className="page">{componentMap[currentComponent]}</div>
    </div>
  );
}

export default App;

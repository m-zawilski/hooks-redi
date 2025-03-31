import { memo, useCallback, useState } from "react";

// memoized component
const UseCallbackElement = memo(function UseCallbackElement({
  onClick,
}: {
  onClick: () => void;
}) {
  console.log("Button render starts");

  let count = 0;

  // mock long rendering time
  for (let i = 0; i < 10 ** 9; i++) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    count++;
  }

  return <button onClick={onClick}>Increment</button>;
});

function UseCallbackExample({ step = 2 }: { step?: number }) {
  const [count, setCount] = useState(0);

  // memoized function
  const onClick = useCallback(() => {
    setCount((count) => count + step);
  }, [step]);

  return (
    <div>
      <h2>useCallback Example</h2>
      {/* Passing a memoized function to a memoized component */}
      <UseCallbackElement onClick={onClick} />
      <p>{count}</p>
    </div>
  );
}

export default UseCallbackExample;

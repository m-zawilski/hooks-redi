import { useMemo, useState } from "react";

const DEFAULT_TODOS = [
  "Clean the apartment",
  "Cook the dinner",
  "Learn React",
  "Conquer the world",
];

// mock function that takes longer time to run
const filterTodos = (todos: string[]) => {
  let count = 0;
  for (let i = 0; i < 10 ** 9; i++) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    count++;
  }
  return [todos[todos.length - 1]];
};

function UseMemoExample({ todos = DEFAULT_TODOS }: { todos?: string[] }) {
  const [count, setCount] = useState(0);

  console.time("filter array");
  // const visibleTodos = filterTodos(todos);
  const visibleTodos = useMemo(() => filterTodos(todos), [todos]);
  console.timeEnd("filter array");

  return (
    <div>
      <h2>useMemo Example</h2>
      {visibleTodos.map((todo, i) => (
        <p key={i}>{todo}</p>
      ))}
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemoExample;

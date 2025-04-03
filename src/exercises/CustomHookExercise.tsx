// Implement a custom hook useItemList that accepts the initial list of items
// Hook should return the current list of items and a function that allows adding an additional item

import { ChangeEvent, useState } from "react";

const useItemList = (initialItems: Array<string>) => {
  const [items, setItems] = useState(initialItems);

  const addItem = (i: string) => {
    setItems([...items, i]);
  }

  return {
    items,
    addItem
  };
};

const CustomHookExercise = () => {
  const { items, addItem } = useItemList(["yuzu", "nashi"]);
  const [ input, setInput] = useState<string>("")

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
          }}
          placeholder="Add new item"
        />
        <button
          onClick={() => {
            if (input.trim() !== "") {
              addItem(input);
            }
            setInput("");
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default CustomHookExercise;

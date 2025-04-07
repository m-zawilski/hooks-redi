import React, { useState } from "react";
// Implement a custom hook useItemList that accepts the initial list of items
// Hook should return the current list of items and a function that allows adding an additional item

function useItemList() {
  const [items, setItems] = useState<string[]>([]);

  const addItems = (NewItems: string[]) => {
    setItems((PrevItems) => [...PrevItems, ...NewItems]);
  };
  return { items, addItems };
}

function CustomHookExercise() {
  const { items, addItems } = useItemList();
  const [newItem, setNewItem] = useState("");

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
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <button
          onClick={() => {
            if (newItem) {
              addItems([newItem]);
              setNewItem("");
            }
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default CustomHookExercise;

import { useState } from "react";

// Implement a custom hook useItemList that accepts the initial list of items
// Hook should return the current list of items and a function that allows adding an additional item

// TODO
type Item = string;
type ItemList = Item[];

const useItemList = (initialList: ItemList) => {
  const [items, setItems] = useState<ItemList>(initialList);
  
  const addItem = (item: Item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  return {
    items,
    addItem
  }
};

const CustomHookExercise = () => {
  const initialList: string[] = [];
  const { items, addItem } = useItemList(initialList);
  const [ input, setInput ]  = useState('');

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
          value={input}
          type="text"
          onChange={(e) => {
            setInput(e.target.value)
          }}
          placeholder="Add new item"
        />
        <button
          onClick={() => {
            setInput('');
            addItem(input);
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default CustomHookExercise;

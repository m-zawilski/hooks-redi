// Implement a custom hook useItemList that accepts the initial list of items
// Hook should return the current list of items and a function that allows adding an additional item

// TODO
const useItemList = () => {
  return {
    items: ["eaw", "ewaea"],
    addItem: () => {},
  };
};

const CustomHookExercise = () => {
  const { items, addItem } = useItemList();

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
          onChange={() => {
            /* TODO */
          }}
          placeholder="Add new item"
        />
        <button
          onClick={() => {
            /* TODO */
          }}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default CustomHookExercise;

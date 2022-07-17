import { useState } from "react";
import "./ToDo.css";

function ToDo({ changeLogo }) {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("enter an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldLIst) => [...oldLIst, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  {
    return (
      <div className="todo">
        <h1>Todo list app</h1>

        <input
          type="text"
          placeholder="Add an item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button onClick={() => addItem()}>Add</button>

        <ul>
          <button onClick={changeLogo}>Change Logo</button>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  <span className="closeIcon">X</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ToDo;

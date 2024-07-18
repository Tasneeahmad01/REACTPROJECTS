import React, { useState } from 'react';
import './TodoApp.css'; // Import the CSS file

function TodoApp() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputData.trim()) {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="https://www.xelaton.com/layout/images/appIcons/notecIcon.png" alt="" />
            <figcaption>Add Your List Here 🤞</figcaption>
          </figure>
          <div className="AddItems">
            <input
              type="text"
              placeholder="Add Items ✍"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i className="fa-solid fa-plus add-btn" title="Add Item"     onClick={addItem}></i>
          </div>
          <div className="showItems">
            {items.map((item, index) => (
              <div className="eachItem" key={index}>
                <h3>{item}</h3>
                <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(index)}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;

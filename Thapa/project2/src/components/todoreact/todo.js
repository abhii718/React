import React, { useState, useEffect } from "react";
import "./style.css";

// Function to retrieve data from local storage
const getLocalData = () => {
  const lists = localStorage.getItem("mytodoList");

  // Check if data exists in local storage
  if (lists) {
    // If data exists, parse and return it
    return JSON.parse(lists);
  } else {
    // If no data exists, return an empty array
    return [];
  }
};

const Todo = () => {
  // State variables to manage input data, to-do list items, edit item ID, and toggle button state
  const [inputdata, setInputData] = useState("");
  const [item, setItem] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  // Function to add an item to the to-do list
  const addItem = () => {
    if (!inputdata.trim()) {
      // Alert user if input is empty
      alert("Please input data");
    } else if (inputdata && toggleButton) {
      // If in edit mode, update the existing item
      setItem(
        item.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );
      // Reset input data, edit item ID, and toggle button state
      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      // If not in edit mode, add a new item
      const newItem = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItem([...item, newItem]);
      setInputData("");
    }
  };

  // Function to set input data and edit item ID for editing an item
  const editItem = (id) => {
    const item_todo_edited = item.find((e) => e.id === id);
    setInputData(item_todo_edited.name);
    setIsEditItem(id);
    setToggleButton(true);
  };

  // Function to delete an item from the to-do list
  const deleteItem = (id) => {
    const updatedItem = item.filter((curElem) => curElem.id !== id);
    setItem(updatedItem);
  };

  // Function to remove all items from the to-do list
  const removeAll = () => {
    setItem([]);
    localStorage.setItem("mytodoList", JSON.stringify([]));
  };

  // Effect to update local storage when item state changes
  useEffect(() => {
    localStorage.setItem("mytodoList", JSON.stringify(item));
  }, [item]);

  // JSX code to render the to-do list UI
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./image/todo.svg" alt="todologo" />
            <figcaption>Add your List Here😘😘 </figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" ✍️ Add your Item"
              className="form-control"
              value={inputdata}
              onChange={(e) => setInputData(e.target.value)}
            />{" "}
            {toggleButton ? (
              <i className="fa fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          <div className="showItem">
            {item.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-edit add-btn"
                      onClick={() => {
                        editItem(curElem.id);
                      }}
                    ></i>
                    <i
                      className="fa fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItem">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span> CheckList </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

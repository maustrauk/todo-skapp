import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import './App.css';

function App() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem(event) {
        setItems(prevData => {
            return [...prevData, input];
        });
        
        setInput("");
    }

    function removeItem(id) {
        setItems(prevData => {
            return prevData.filter((item, index) => {
                return index !== id;
            })
        });
    }

    return (
      <TodoList input={input} setInput={setInput} items={items} addItem={addItem} removeItem={removeItem}/>
    );
}

export default App;

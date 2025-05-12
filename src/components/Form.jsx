import React, { useState } from "react";

function Form({ addTask }) {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value); // Update the input field's state
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (name.trim() === "") return; // Prevent adding empty tasks
    addTask(name); // Call the addTask function passed from the parent
    setName(""); // Clear the input field after submission
  };



  
  
  return (
    
      <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
       onChange={handleChange}
        
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
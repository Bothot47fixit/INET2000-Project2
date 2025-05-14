import React, { useState } from "react";

function Form({ handleTask }) {
  const [name, setName] = useState(() => {
return localStorage.getItem("todo-input") || ""; // Retrieve saved value or default to an empty string
  });
  const handleChange = (e) => {
    setName(e.target.value); // Save the input value to localStorage
    localStorage.setItem("todo-input", e.target.value);
  };
    const handleButtonClick = () => {
    handleTask(name); // Call the handleTask function passed from App.jsx
    setName(""); // Clear the input field
     localStorage.setItem("todo-input", e.target.value);//save to localStorage
  };



    return (
    <div>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
           Select, Or add New Task!
        </label>
      </h2>
      {/* Move the input box to the bottom */}
<div className="input-box-wrapper">
        <h1 className="input-description">
          Use box  just below to add notes or tasks. Your input will be saved until you submit it.
        </h1>
      </div>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name} // Bind the input value to state
        onChange={handleChange} // Update state on input change
        placeholder="Enter your Notes here..."
      />
      <button
        type="button" // Change no longer a form submit button
        className="btn btn__primary btn__lg"
        onClick={handleButtonClick} // Handle the task on button click
      >
        Add/Submit
      </button>
    </div>
  );
} 
  export default Form;
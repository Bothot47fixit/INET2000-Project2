import React, { useState } from "react";
function Form({ handleTask }) {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
    const handleButtonClick = () => {
    handleTask(name); // Call the handleTask function passed from App.jsx
    setName(""); // Clear the input field
  };
    return (
    <div>
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
        value={name} // Bind the input value to state
        onChange={handleChange} // Update state on input change
      />
      <button
        type="button" // Change to "button" since it's no longer a form submit button
        className="btn btn__primary btn__lg"
        onClick={handleButtonClick} // Handle the task on button click
      >
        Add/Submit
      </button>
    </div>
  );
} 
  export default Form;
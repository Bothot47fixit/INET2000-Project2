import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  
  function handleChange(e) {
    setName(e.target.value); // Update the input value in state
  }
function onSubmit(e) {
    e.preventDefault();
    handleSubmit(name); // Pass the task name to the parent component
    setName(""); // Clear the input field after submission
  }
    return (
      <form onSubmit={onSubmit}>
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
        <button type="submit" className="btn btn__primary btn__lg">
          Add/Submit
        </button>
      </form>
    );
  }
  
  export default Form;
import React from 'react';

function FilterButton(props) {
  return (
    <button
      type="button"
      className={`btn toggle-btn ${props.name === "All" ? "btn--all" : ""}`}
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)} // Set the filter on click
    > 
    
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;

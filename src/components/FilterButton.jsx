import React from 'react';

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed} // Dynamically set aria-pressed
      onClick={() => props.setFilter(props.name)} // Call setFilter with the filter name
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span> {/* Dynamically display the filter name */}
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;

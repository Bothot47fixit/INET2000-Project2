import React from 'react';

function FilterButton({ name, isPressed, setFilter, style }) {
  return (
    <button
      type="button"
      className={`btn toggle-btn ${isPressed ? "btn-active" : ""}`} 
      aria-pressed={isPressed} // Dynamically set aria-pressed
      onClick={() => setFilter(name)} // Call setFilter with the filter name
      style={style} // Dynamically set the button color
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span> {/* Dynamically display the filter name */}
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;

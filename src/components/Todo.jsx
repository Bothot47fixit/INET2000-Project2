import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

// Custom hook to track the previous value of a state or prop
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}


function Todo({ name, completed, tasks , headingText   , toggleTaskCompleted }) {
    const [isEditing, setIsEditing] = useState(false);
    const editFieldRef = useRef(null); // Reference for the input field
    const editButtonRef = useRef(null); // Reference for the edit button
    const listHeadingRef = useRef(null); // Reference for the list heading

  const prevTaskLength = usePrevious(0); // Track the previous length of tasks//remove  dependecy tasks inside function
  const prevIsEditing = usePrevious(isEditing); // Track the previous value of isEditing

   // Log "main render" whenever the component renders
   console.log("main render");

   useEffect(() => {
    const wasNotEditingBefore = !prevIsEditing && isEditing;
    const wasEditingBefore = prevIsEditing && !isEditing;

      if (wasNotEditingBefore) {
          editFieldRef.current.focus(); // Focus on the input field
      } else if (wasEditingBefore) {
      editButtonRef.current.focus(); // Focus on the edit button
      }
   }, [isEditing, prevIsEditing]); // Run this effect when isEditing or prevIsEditing changes

    console.log(`isEditing changed: ${isEditing}`);
  // Dependency array ensures this runs only when isEditing changes



  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => editFieldRef.current.focus(), 0); // Focus the input field when editing starts
    console.log(editButtonRef.current); // Log the button element to the console
          editFieldRef.current.focus(); // Focus the input field when editing starts
};

  const handleSave = () => {
    setIsEditing(false);
      editButtonRef.current.focus(); // Focus the edit button after saving
  };
  const editingTemplate = (
    <div className="stack-small">
      <div className="form-group">
        <label className="todo-label" htmlFor={name}>
          New name for {name}
        </label>
        <input
          id={name}
          className="todo-text"
          type="text"
          defaultValue={name}
          ref={editFieldRef} // Attach the input field reference
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn__primary" onClick={handleSave}>
          Save <span className="visually-hidden">new name for {name}</span>
        </button>

        <button
          type="button"
          className="btn btn__danger"
          onClick={() => setIsEditing(false)}
        >
          Cancel <span className="visually-hidden">editing {name}</span>
        </button>
      </div>
    </div>
  );

  const viewTemplate = (          //react
    <div className="stack-small">
      <div className="c-cb">
        <input id={name} type="checkbox" 
        checked={completed} 
         onChange={toggleTaskCompleted} // C
        />
        <label className="todo-label" htmlFor={name}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setIsEditing(true)} // Set editing to true
          ref={editButtonRef} // Attach the edit button reference
        >
      <FontAwesomeIcon icon={faPencilAlt} /> {/* Pencil Icon */}
  <span className="visually-hidden">{name}</span>
        Edit <span className="visually-hidden">{name}</span>
        </button>

        {/* Delete Button */}  
        <button type="button" className="btn btn__danger">
         <FontAwesomeIcon icon={faTrash} /> {/* Trash Icon */}  
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </div>
  );

  return(
     <li className="todo">
<h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>

    {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}



export default Todo;
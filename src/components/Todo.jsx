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


function Todo({ id, name, completed, toggleTaskCompleted, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const editFieldRef = useRef(null); // Reference for the input field
  const editButtonRef = useRef(null); // Reference for the edit button
  const prevIsEditing = usePrevious(isEditing); // Track the previous value of isEditing
  
  
useEffect(() => {
    if (!prevIsEditing && isEditing) {
      editFieldRef.current.focus(); // Focus on the input field when editing starts
    }
    if (prevIsEditing && !isEditing) {
      editButtonRef.current.focus(); // Focus on the edit button after saving
    }
  }, [isEditing, prevIsEditing]);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(id, newName); // Call the editTask function from App.jsx
    setIsEditing(false); // Exit editing mode
  };

   
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for {name}
        </label>
        <input
          id={id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
     <div className="btn-group">
        <button type="submit" className="btn btn__primary">
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
    </form>
  );
    const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id)}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-edit"
          onClick={() => setIsEditing(true)}
          ref={editButtonRef}
        >


          <FontAwesomeIcon icon={faPencilAlt} /> {/* Pencil Icon */} 
          Edit <span className="visually-hidden">{name}</span>
        </button>


         <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(id)}
        >
          <FontAwesomeIcon icon={faTrash} /> {/* Trash Can Icon */}
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </div>
  );
 
  
   return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}


export default Todo;
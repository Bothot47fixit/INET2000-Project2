import React from "react";

function Todo({name, completed}) {
    return (
        
      <li className="todo stack-small">
      <div className="c-cb">
      
        <input id={name} type="checkbox" defaultChecked={completed} />
        {/* Use the name prop to set the label text */}
        <label className="todo-label" htmlFor={name}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
}




export default Todo;
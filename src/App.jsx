
import React, { useState } from "react";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import React, { useState } from 'react';



function App() {// defined tasks array
  
  const [ tasks , setTasks]= useState([
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },  
    { id: 3, name: "Task 3", completed: false },
  ]);
// those stupid All buttons dummy
  const [filter, setFilter] = useState("All");
   // Define filter functions
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP); 
 const filteredTasks = tasks.filter(FILTER_MAP[filter]);

  const filterButtons = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
// Function to add a new task/ and be able to show you checked it

// Function to toggle the completed state of a task
  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const taskList = tasks.map((task) => (
<Todo 
key={task.id} 
name={task.name} 
completed={task.completed} 
toggleTaskCompleted= {() => toggleTaskCompleted(task.id)}

 />

));
const remainingTasks = tasks.filter(task => !task.completed).length;// Count the number of remaining tasks

    return (
        <div className="todoapp stack-large">
            <h1 className="marquee">ToDoMatic</h1>
            <form>          

           <h2 className="label-wrapper">
          
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?

          </label>           </h2>

          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
        

            
<div className="filters btn-group stack-exception">
        <FilterButton name="All"/>
        <FilterButton name= "Active" />
        <FilterButton name="Complete"
        />
      </div>
        
     <h2 id="list-heading">
  {remainingTasks > 0 ? `${remainingTasks} tasks remaining` : "No tasks remaining"}
</h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
        >
       
        {taskList}
      </ul>
    </div>
  );
}

export default App;
             



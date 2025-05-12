
import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";




function App({tasks}) {// defined tasks array
    console.log('App component loaded with tasks:', tasks);// talk to me console
       const [currentTasks, setTasks] = useState(tasks); 
       const [filter, setFilter] = useState("All");
      


      const addTask =(name) => {
      const newTask = { id: `todo-${currentTasks.length}`, name, completed: false };
    setTasks([...currentTasks, newTask]); // Add the new task to the current tasks
  };

  
   // Define filter functions
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

 const FILTER_NAMES = Object.keys(FILTER_MAP); 

 const filteredTasks = currentTasks.filter(FILTER_MAP[filter]);


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
    const updatedTasks = currentTasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const taskList = currentTasks.map((task) => (
      <Todo 
    key={task.id} 
    name={task.name} 
    completed={task.completed} 
    toggleTaskCompleted= {() => toggleTaskCompleted(task.id)}

 />

));
const remainingTasks = currentTasks.filter(task => !task.completed).length;// Count the number of remaining tasks

    return (
        <div className="todoapp stack-large">
            <h1 className="marquee">ToDoMatic</h1>
                   
            <Form addTask={addTask} />    

            
            <div className="filters btn-group stack-exception"> {filterButtons}   </div>           
        
             <h2 id="list-heading">
                   {remainingTasks > 0 ? `${remainingTasks} tasks remaining`
                                       : "No tasks remaining"}
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
             


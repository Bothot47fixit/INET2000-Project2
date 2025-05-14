import './index.css'; // Adjust the path if necessary
import React, { useState } from 'react'; 
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import TodoList from "./components/TodoList"; // Import the TodoList component
const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);
function App(props) {  
  const [tasks, setTasks] = useState(props.tasks || []);
  const [filter, setFilter] = useState("All");
  const [submissionMessage, setSubmissionMessage] = useState(""); // State for the message
        function addTask(name) {
          const newTask = { id: `todo-${tasks.length}`, name, completed: false };
            setTasks([...tasks, newTask]);  
        }
 function handleTask(name) {  
  const existingTask = tasks.find(task => task.name === name);

  if (existingTask) {
    if (existingTask.completed) {
      // Task is already completed
      setSubmissionMessage(`Task "${name}" is already marked as completed.`);
    } else {
      // Task exists but is not completed
      setSubmissionMessage(`Task "${name}" already exists. You can edit or complete it.`);
    }
  } else {
    // Add a new task
    const newTask = { id: `todo-${tasks.length}`, name, completed: false };
    setTasks([...tasks, newTask]);
    setSubmissionMessage(`Thank you! Your task "${name}" has been added.`);
  }
  setTimeout(() => setSubmissionMessage(""), 6000);
}
function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }
function deleteTask(id) {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks(remainingTasks);
  }
  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (task.id === id) {
        return { ...task, name: newName };
      }
       return task;
    });
    setTasks(editedTaskList);
  }
const filterList = FILTER_NAMES.map((name, index) => {//this makes big diff w buttons
  // Assign colors based on the number of completed tasks
  const completedTasks = tasks.filter(task => task.completed).length;
  const buttonLabel = 3 - index;//"orange"; // Default color
  let buttonColor = "orange"; // Default color
  if (completedTasks === 1) {
    buttonColor = "blue";
  } else if (completedTasks >= 2) {
    buttonColor = "yellow";
  }
  return (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
      style={{ backgroundColor: buttonColor }} // Pass the dynamic color as a style
      label={buttonLabel} // Pass the number as the label
    />
  );
});       
 const incompleteTasks = tasks ? tasks.filter(task => !task.completed).length : 0;
const tasksNoun = incompleteTasks !== 1 ? "tasks" : "task";
const headingText = `${incompleteTasks} ${tasksNoun} remaining`;      
return (
    <div className="todoapp stack-large">
      <div className="marquee">
        <span>TodoMatic! Manage your tasks efficiently!</span>
      </div>

      <Form handleTask={handleTask} />
      {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
      <div className="filters btn-group stack-exception">{filterList}</div>
      <p className="tasks-left">
  You have {incompleteTasks} {incompleteTasks === 1 ? "task" : "tasks"} left.
</p>
      
      <TodoList
        tasks={tasks.filter(FILTER_MAP[filter])}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}
 
export default App;
             



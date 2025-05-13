import './index.css'; // Adjust the path if necessary
import React, { useState } from 'react'; 
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

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
function addTask(name) {
  console.log("Adding task:", name);

    const newTask = { id: `todo-${tasks.length}`, name, completed: false };
    setTasks([...tasks, newTask]);
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



    const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
      <Todo
        key={task.id}
        id={task.id}
        name={task.name}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));


const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
        
        const incompleteTasks = tasks.filter(task => !task.completed).length;
      console.log("Incomplete tasks:", incompleteTasks); // Debugging log
  const tasksNoun = incompleteTasks !== 1 ? "tasks" : "task";
  const headingText = `${incompleteTasks} ${tasksNoun} remaining`;


  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!"); // Debugging log
    const name = e.target.elements["new-todo-input"].value.trim();
    if (name) {
      addTask(name);
      setSubmissionMessage(`Thank you! Your task "${name}" has been submitted.`); 
      
      console.log("Submission message set:", "Thank you! Your task has been submitted."); 
      e.target.reset();
     setTimeout(() => setSubmissionMessage(""), 6000); 
    }
  }


    return (
    <div className="todoapp stack-large">
      <div className="marquee">
      <span>TodoMatic!  Manage your tasks efficiently!</span>
      </div>

      <form onSubmit={handleSubmit}>
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
        />
        <button type="submit" className="btn btn__primary btn__lg"
       
         >
          Add/Submit
        </button>
      </form>
      {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
      {console.log("Rendering submissionMessage:", submissionMessage)}
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{headingText}</h2>
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
             



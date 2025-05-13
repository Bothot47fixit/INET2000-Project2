import './index.css'; // Adjust the path if necessary
import React, { useState } from 'react'; 
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";

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

  
  function handleSubmit(name) {
    if (name) {
      addTask(name);
      setSubmissionMessage(`Thank you! Your task "${name}" has been submitted.`);
      setTimeout(() => setSubmissionMessage(""), 6000);
    }
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


  


    return (
    <div className="todoapp stack-large">
      <div className="marquee">
      <span>TodoMatic!  Manage your tasks efficiently!</span>
      </div>

       <Form handleSubmit={handleSubmit} />
      {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
      {console.log("Rendering submissionMessage:", submissionMessage)}
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading">{headingText}</h2>

     <TodoList
        tasks={tasks.filter(FILTER_MAP[filter])}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />

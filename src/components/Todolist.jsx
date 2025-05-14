
import Todo from "./Todo"; // Ensure the Todo component is correctly imported

function TodoList({ tasks, toggleTaskCompleted, deleteTask, editTask }) {
  return (
    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {tasks.map((task) => (
        <Todo
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
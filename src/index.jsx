

import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'; // Import your App component
import './index.css'; // Import your CSS file
// Define the DATA array
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
// Get the root element from the DOM
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create a root and render the App component
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);


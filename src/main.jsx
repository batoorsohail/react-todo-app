import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import TodoApp from './components/TodoApp';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <TodoApp />
    </Router>
  </React.StrictMode>,
);

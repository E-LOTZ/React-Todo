import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './Components/Form.js'
import Todo from './Components/Todo.js'
import Header from './Components/Header.js'

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const removeArray = () => {
    const count = [];
    setTodos(count);
  }
  const checkDone = () => {
    const check = todos.filter(item => !item.completed);
    setTodos(check);
  }
  return (
    <div>
    <Header todos = {todos}/>
   <Form text = {text} setText = {setText} todos = {todos} setTodos = {setTodos}/>
   <Todo todos = {todos} setTodos = {setTodos} setText = {setText} />
  <div className = 'container text-center'>
   <button className = 'btn btn-outline-danger btn-small mr-3' onClick = {removeArray}>Delete All</button>
   <button className = 'btn btn-outline-dark btn-small' onClick = {checkDone}>Filter Done</button>
  </div>
   </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
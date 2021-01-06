import React from 'react'

const TodoList = ({ todo, deleteBtn, editBtn, onCheck }) => {
  const styling = () =>{
    return todo.completed ? 'active' : 'inAct'
  }
  return (
    <li className = 'main-ls list-group-item d-flex justify-content-between'><input type = 'checkbox' onChange = {() => onCheck(todo)} checked = {todo.completed}/> <span className = {styling()}>{todo.title}</span><div><button onClick = {() =>deleteBtn(todo)}><i className = 'fa fa-trash'></i></button><button onClick = {() => editBtn(todo)}><i className = 'fa fa-edit'></i></button></div></li>
  );
}

export default TodoList;
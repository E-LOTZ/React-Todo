import React from 'react'
import TodoList from './TodoList.js'

const Todo = ({ todos, setTodos, setText }) => {
  const removeList = (countid) => {
    const count = todos.filter(tod => tod.id !== countid.id);
    setTodos(count);
  }
  const editList = (edId) => {
    const check = todos.find(item => item.id === edId.id);
    setText(check.title);
    const count = todos.filter(tod => tod.id !== edId.id);
    setTodos(count);
  }
  const changeCheck = (chId) => {
    const chEck = todos.map(tod => {
      if (tod.id === chId.id) {
        return { ...tod, completed: !tod.completed }
      }
      return tod;
    });
    setTodos(chEck);
  }
  return (
    <div className = 'container'>
     {todos.length === 0 && <div className="alert alert-danger text-center">No Todo in your list</div>}
    <ul className = 'list-group list-group-flush'>
      {todos.map(todo => <TodoList key = {todo.id} todo = {todo} deleteBtn = {removeList} editBtn = {editList} onCheck = {changeCheck}/>)}
      </ul>
    </div>
  );
}

export default Todo;
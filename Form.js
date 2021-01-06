import React from 'react'

const Form = ({ text, setText, todos, setTodos }) => {
  const creteList = (e) => {
    e.preventDefault();
    if (text !== '') {
      const mainText = {
        title: text,
        id: Date.now(),
        completed: false
      }
      setTodos([...todos, mainText]);
      setText('')
    } else {
      return;
    }
  }
  const changeText = (e) => {
    setText(e.target.value)
  }
  return (
    <form className = 'p-2 text-center' onSubmit = {creteList}>
    <div className = 'form-row'>
    <div className = 'col-10'>
    <input className = 'form-control' type = 'text' onChange = {changeText} value = {text}/>
    </div>
    <div className = 'col'>
     <button className = 'btn btn-warning btn-sm' type = 'submit'><i className = 'fa fa-plus'></i></button>
    </div>
    </div>
   </form>
  );
}

export default Form;
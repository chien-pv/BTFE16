import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from './component/form_todo';
import ListTodo from './component/list_todo';
import React, { useState } from 'react';

function App() {

  let [todos, setTodo] = useState(
    [
      {
        id: 1,
        name: "Hoc HTML",
        isDone: false,
        isEdit :false
      },
      {
        id: 2,
        name: "Hoc CSS",
        isDone: false,
        isEdit :false
      },
      {
        id: 3,
        name: "Hoc JS",
        isDone: false,
        isEdit :false
      }
    ]
  )

  let [nameEdit,setNameEdit] = useState("");

  function changeChecked(id){
    console.log(id-1);
    todos[id-1].isDone = !todos[id-1].isDone;
    setTodo([...todos]);
  }

  let [idEdit,setIdEdit] = useState();

  function addTodos(name){
    let item = {
      id: todos.length + 1, 
      name,
      isDone: false,
      isEdit :false
    }
    setTodo([...todos,item]);
  }

  function DeleteID(id){
    let index = todos.findIndex((item)=>{
      return id === item.id;
    })
    todos.splice(index,1);
    setTodo([...todos]);
  }

  function EditItem(id){
    setNameEdit(todos[id-1].name);
    todos[id-1].isEdit = !todos[id-1].isEdit;
    setTodo([...todos]);
    setIdEdit(id);
  }

  return (
    <div>
      <FormTodo addTodos={addTodos} nameEdit={nameEdit}/>
      <ListTodo DeleteID={DeleteID} EditItem={EditItem} changeChecked={changeChecked} todos={todos}/>
    </div>
  );
}

export default App;

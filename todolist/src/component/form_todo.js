import React, { useState, useEffect  } from 'react';

function FormTodo(props) {

  let [name, setName] = useState("");

  function handleChange(e){
    setName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    props.addTodos(name);
    setName("");
  }

  useEffect(()=>{
    setName(props.nameEdit);
  },[props.nameEdit])

  return (
    <div>
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input onChange={handleChange} value={name} type="text" className="form-control" />
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary mb-2">Add</button>
      </form>
    </div>
  );
}

export default FormTodo;
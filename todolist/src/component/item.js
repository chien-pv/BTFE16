function Item(props) {

  let {index, id , name, isDone}  = props;

  let handleClick = (e) =>{
    props.changeChecked(id);
  }

  function DeleteItem(){
    props.DeleteID(id);
  }

  function EditItem(){
      props.EditItem(id);
  }

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{name}</td>
      <td>
          <input type="checkbox" checked={isDone} onClick={handleClick} />
      </td>
      <td>
          <button onClick={EditItem} type="button" class="btn btn-warning">Edit</button> &nbsp;
          <button onClick={DeleteItem} type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}

export default Item
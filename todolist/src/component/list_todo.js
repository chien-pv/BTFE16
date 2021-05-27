import Item from "./item";

function ListTodo(props) {

  let datas = props.todos.map((item ,index) => {
    return <Item DeleteID={props.DeleteID} EditItem={props.EditItem} changeChecked={props.changeChecked} index={index} {...item} ></Item>
  }) 

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
          {datas}
      </tbody>
    </table>
  );
}

export default ListTodo;
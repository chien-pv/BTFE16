import './App.css';
import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  let [pizzas, setpizzas] = useState(
    [
      {
        id: 1,
        name: "Cake1",
        price: 10,
        urlImage: "/h1.jfif",
        count: 10,
        count_now:0,
      },
      {
        id: 2,
        name: "Cake2",
        price: 15,
        urlImage: "/h2.jfif",
        count: 10,
        count_now:0,
      },
      {
        id: 3,
        name: "Cake3",
        price: 20,
        urlImage: "/h3.jfif",
        count: 10,
        count_now:0,
      },
      {
        id: 4,
        name: "Cake4",
        price: 25,
        urlImage: "/h4.jfif",
        count: 8,
        count_now:0,
      },{
        id: 5,
        name: "Cake5",
        price: 30,
        urlImage: "/h5.jfif",
        count: 9,
        count_now:0,
      },{
        id: 6,
        name: "Cake6",
        price: 35,
        urlImage: "/h6.jfif",
        count: 11,
        count_now:0,
      },{
        id: 7,
        name: "Cake7",
        price: 15,
        urlImage: "/h7.jfif",
        count: 14,
        count_now:0,
      },
    ]
  )

  let [isChange, SetIsChange] =useState(true);
  let [isChangeRemove, SetIsChangeRemove] =useState(true);
  let [objCurrent, setObjCurrent] = useState(null);
  let [IdRemove,setIdRemove] = useState(null);

  function orderPizzas(id){
    setObjCurrent(pizzas[id-1]);
    SetIsChange(!isChange);
    pizzas[id-1].count_now = pizzas[id-1].count_now+1;
    setpizzas([...pizzas]);
  }

  let [checkoutdefaut,setcheckoutdefaut]= useState(true);

  function IsCheckOut(IsCheckOut){
    if(IsCheckOut==="checkout"){
      setcheckoutdefaut(!checkoutdefaut);
      for (const i in pizzas) {
        pizzas[i].count = pizzas[i].count -pizzas[i].count_now
        pizzas[i].count_now =0;
      }
      setpizzas([...pizzas]);
    }

  }
  function RemovePizza(id){
    setIdRemove(id);
    SetIsChangeRemove(!isChangeRemove);
    pizzas[id-1].count_now = pizzas[id-1]-1;
    setpizzas([...pizzas]);
  }
  
  return(
    <div className="container">
    <div className="row">
      <div className="col-8">
        <ListOrders orderImage = {objCurrent} isChange ={isChange} checkoutdefaut={checkoutdefaut} isChangeRemove={isChangeRemove} IdRemove={IdRemove}/>
      </div>
      <div className="col-4">
        <ListPizzas IsCheckOut={IsCheckOut} pizzas={pizzas} RemovePizza={RemovePizza} orderPizzas={orderPizzas}/>
      </div>
    </div>
  </div>
 )
}

function ListOrders(props){
  let [orders,SetOrders] = useState([])
  useEffect(()=>{
    if(props.orderImage!==null){
      SetOrders([...orders,props.orderImage])
    }},[props.orderImage,props.isChange]);

  useEffect(()=>{
    if(props.IdRemove!==null){
      let Id = orders.findIndex((item)=>{
        return item.id ==props.IdRemove;
      });
      orders.splice(Id,1);
      SetOrders([...orders])
    }
  },[props.IdRemove,props.isChangeRemove]);

  useEffect(()=>{
    SetOrders([]);
  },[props.checkoutdefaut])
  let dataOrder = orders.map((item, index)=>{
    return(
      <img className="image" src={`${process.env.PUBLIC_URL}${item.urlImage}`} />
    )
  })
  return(
    <>
      {dataOrder}
    </>
  )
}

function ListPizzas(props){
  let [total,setTotal] = useState(0);
  function recevedtotal(price)
  {
    setTotal(price + total);
  } 
  let [countdefaut,setCountDefaut]=useState(true);
  let datas = props.pizzas.map((item, index)=>{
    return(
      <Item orderPizzas={props.orderPizzas} countdefaut={countdefaut} Checkout={Checkout} RemovePizza={props.RemovePizza} recevedtotal={recevedtotal} {...item}/>
    )
  })

  function Checkout(){
    alert(`You pay :  ${total}$
      THANK YOU`);
    setTotal(0);
    props.IsCheckOut("checkout");
    setCountDefaut(!countdefaut);
  }
   return(
    <>
     <table className="table">
        <tbody>
         {datas}
          <tr>
            <td>Total</td>
            <td>{total}$</td>
          </tr>
          <tr>
          <td>
          <button type="button" onClick={Checkout} className="btn btn-info checkout">Checkout</button>
          </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function Item(props){
  let {id, name, price, urlImage, count} = props;
  let [itemCount, setitemCount] = useState(0)
  let {countdefaut} = props;

  useEffect(()=>{
    setitemCount(0);
  },[countdefaut])

  function handleClickPlus(){
    if(count <= itemCount){
      alert("Hết hàng");
    }
    else{
      setitemCount(itemCount+1);
      props.orderPizzas(id);
      props.recevedtotal(price);
    }
  }

  function handleClickSub(){
    if(itemCount!=0){
      setitemCount(itemCount-1);
      props.RemovePizza(id);
      props.recevedtotal(-price);
    }
  }

  return(
    <tr>
      <td>
        {name}<br/> 
        {price}$
      </td>
      <td>
        <div className="btn-group" role="group">
          <button onClick={handleClickSub} type="button" className="btn btn-danger">-</button>
          <button type="button" className="btn btn-secondary">{itemCount}</button>
          <button onClick={handleClickPlus} type="button" className="btn btn-success">+</button>
        </div>
      </td>
    </tr>
  )
}

export default App;

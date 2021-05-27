import React from "react";

function ItemDish(props) {
  const { id, name, price } = props;
  return (
    <div className="item-dish">
      <span className="item__dish--id">{id}</span>&emsp;&emsp;
      <span className="item__dish--name">{name}</span>&emsp;&emsp;  
      <span className="item__dish--price">{price}$</span>
    </div>
  )
}

export default ItemDish;
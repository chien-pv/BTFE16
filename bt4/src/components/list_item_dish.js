import React from "react";
import PropTypes from "prop-types";
import ItemDish from "./item_dish";

ListItemDish.propTypes = {
  listDish: PropTypes.array,
}

ListItemDish.defaultProps = {
  listDish: [],
}

function ListItemDish(props) {
  const { listDish } = props;
  const element = listDish.map(item => (
    <ItemDish {...item} key={item.id} />
  ))

  return (
    <div className="list-item-dish">
      {element}
    </div>
  )
}

export default ListItemDish;
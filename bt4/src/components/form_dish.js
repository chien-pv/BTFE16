import React, { useState } from "react";
import PropTypes from "prop-types";

FormDish.propTypes = {
  onAddDish: PropTypes.func,
  onSearchDish: PropTypes.func,
}

FormDish.defaultProps = {
  onAddDish: null,
  onSearchDish: null,
}

function FormDish(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [search, setSearch] = useState("");
  const { onAddDish, onSearchDish } = props;

  function onHandleSubmitForm(event) {
    event.preventDefault();

    if (onAddDish) {
      onAddDish(name, price)
    };

    setName("");
    setPrice(0);
  }

  function handleSearch() {
    if (onSearchDish) {
      onSearchDish(search);
    }

    return;
  }

  function onChangeSearch(e) {
    const value = e.target.value;

    setSearch(value);
  }

  return (
    <div className="form-dish" >
      <form className="form-dish__form" onSubmit={onHandleSubmitForm}>
        <input type="text" placeholder="Enter name dish" value={name || ""} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Enter price dish" value={price || 0} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Dish</button>
      </form>
      <input type="text" value={search} onChange={onChangeSearch} placeholder="Search item" />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default FormDish;
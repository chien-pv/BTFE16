import './App.css';
import {useState } from 'react';
import FormDish from './components/form_dish';
import ListItemDish from './components/list_item_dish';

function App() {
  const dishes = [
    { id: 1, name: "Xoi Ga", price: 10000 },
    { id: 2, name: "Banh Mi", price: 40000 },
    { id: 3, name: "Gio cha", price: 50000 }
  ]
  
  const [dish, setDish] = useState(dishes);

  function onHandleAddDish(name, price) {
    const newDish = [...dish];
    const newItem = {
      id: newDish.length + 1,
      name,
      price,
    }
    setDish([...newDish, newItem]);
  }

  function onHandleSearchForm(value) {
    const newDish = [...dish];

    const serchTerm = newDish.map(item => {
      return item.name.toLowerCase().includes(value);
    });

    const mapString = serchTerm.map((item, index) => {
      if (item) {
        return newDish[index];
      }
      return;
    });

    const searchDish = mapString.filter(item => {
      return item !== undefined;
    });

    setDish(searchDish);
  }


  return (
    <div className="App">
      <FormDish onAddDish={onHandleAddDish} onSearchDish={onHandleSearchForm} />
      <ListItemDish listDish={dish} />
    </div>
  );
}

export default App;

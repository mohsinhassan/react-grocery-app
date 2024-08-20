

import Header from './Header';
import Content from './Content';
import AddItem from './AddItem';
import TestOne from './TestOne';
import SearchItem from './SearchItem';
import Footer from './Footer';
import { useState } from 'react';


/* const handleNameChange = () => {
  const names = ['Mohsin', 'Hassan', 'Mirsab', 'Mahrosh'];
  const int = Math.floor(Math.random() * 4);
  return names[int];
} */
  
function App() {
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList') || []));
  const [newItem, setNewItem] = useState('');
  const [search, searchItem] = useState('');
  const [color, setColor] = useState('');

  const handleCheckbox = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    addItemToLocalStorage(listItems);
    
      
  }

  const addItemToLocalStorage = (listItems) => {
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id );
    addItemToLocalStorage(listItems);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const name = newItem;
      const item = { id, name };
      const listItems = [...items, item];
      addItemToLocalStorage(listItems);
      setNewItem(''); 
  }

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  }

  return (
    <div className="App">
      
      <Header title="React Grocery List"/>
      <TestOne color={color} setColor={setColor} handleChangeColor={handleChangeColor} />
      <AddItem newItem={newItem} setItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} searchItem={searchItem} handleSubmit={handleSubmit} />
      <Content items={items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))} handleCheckbox={handleCheckbox} handleDelete={handleDelete} />
      <Footer length={items.length}  />

    </div>
    );
}

export default App;

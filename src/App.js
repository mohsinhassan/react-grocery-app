

import Header from './Header';
import Content from './Content';
import AddItem from './AddItem';
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

  return (
    <div className="App">
      <Header title="React Grocery List"/>
      <AddItem newItem={newItem} setItem={setNewItem} handleSubmit={handleSubmit} />
      <Content items={items} handleCheckbox={handleCheckbox} handleDelete={handleDelete} />
      <Footer length={items.length}  />

    </div>
  );
}

export default App;

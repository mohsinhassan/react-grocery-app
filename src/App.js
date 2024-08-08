

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


/* const handleNameChange = () => {
  const names = ['Mohsin', 'Hassan', 'Mirsab', 'Mahrosh'];
  const int = Math.floor(Math.random() * 4);
  return names[int];
} */
  
function App() {
  
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', checked: true},
    { id: 2, name: 'Banana', checked: false},
    { id: 3, name: 'Orange', checked: false}
]);

  const handleCheckbox = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
      
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id );
    setItems(listItems);
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title="React Grocery List"/>
      <Content items={items} handleCheckbox={handleCheckbox} handleDelete={handleDelete} />
      <Footer length={items.length}  />

    </div>
  );
}

export default App;



import Header from './Header';
import Content from './Content';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Footer from './Footer';
import { useState , useEffect} from 'react';


/* const handleNameChange = () => {
  const names = ['Mohsin', 'Hassan', 'Mirsab', 'Mahrosh'];
  const int = Math.floor(Math.random() * 4);
  return names[int];
} */
  
function App() {
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList') || []));
  const [newItem, setNewItem] = useState('');
  const [search, searchItem] = useState('');


  useEffect(()=> {
    console.log('useEffect', items);
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items])
  const handleCheckbox = (id) => {
    console.log('handleCheckbox', items);
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id );
    setItems(listItems);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const name = newItem;
      const item = { id, name };
      const listItems = [...items, item];
      setItems(listItems);
      setNewItem(''); 
  }

  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItem newItem={newItem} setItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} searchItem={searchItem} handleSubmit={handleSubmit} />
      <Content items={items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))} handleCheckbox={handleCheckbox} handleDelete={handleDelete} />
      <Footer length={items.length}  />

    </div>
  );
}
export default App;

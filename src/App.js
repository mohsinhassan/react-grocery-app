

import Header from './Header';
import Content from './Content';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Footer from './Footer';
import { useState , useEffect} from 'react';
import ApiRequest from './ApiRequest';

/* const handleNameChange = () => {
  const names = ['Mohsin', 'Hassan', 'Mirsab', 'Mahrosh'];
  const int = Math.floor(Math.random() * 4);
  return names[int];
} */
  
function App() {
  
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList') || []));
  const [newItem, setNewItem] = useState('');
  const [search, searchItem] = useState('');
  const [fetchError, setFetchError] = useState('');
  const [isLoading, setIsLoading] = useState('true');
  const ApiUrl = 'http://localhost:3500/items';

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(ApiUrl);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => fetchItems(), 2000);
  }, [])
  const handleCheckbox = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    const myItem = items.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }

    const reqUrl = `${ApiUrl}/${id}`;
    const result = await ApiRequest(reqUrl, updateOptions);
    if(result) setFetchError(result); 
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id );

    const deleteOptions = {
      method: 'DELETE'
    }
    const reqUrl = `${ApiUrl}/${id}`;
    const result = await ApiRequest(reqUrl, deleteOptions);
    if(result) setFetchError(result);

    setItems(listItems);
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      var id = items.length ? (parseInt(items[items.length - 1].id) + parseInt(1) ): 1;
      const name = newItem;
      console.log("id", id);
      id = id.toString();
      const item = { id , checked : false, name  };
      const listItems = [...items, item];
      setItems(listItems);

      const postOptions = {
        method : 
        'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(item)
      }
      const result = await ApiRequest(ApiUrl, postOptions); 
      if(result) setFetchError(result);
      setNewItem(''); 
  }

  return (
    <div className="App">
      <Header title="Grocery List"/>
      <AddItem newItem={newItem} setItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} searchItem={searchItem} handleSubmit={handleSubmit} />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => ((item.name).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheckbox}
          handleDelete={handleDelete}
        />
        }
      </main>
      <Footer length={items.length}  />

    </div>
  );
}
export default App;

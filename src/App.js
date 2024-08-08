

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

/* const handleNameChange = () => {
  const names = ['Mohsin', 'Hassan', 'Mirsab', 'Mahrosh'];
  const int = Math.floor(Math.random() * 4);
  return names[int];
} */
  
function App() {
  

  


  return (
    <div className="App">
      <Header title="Home Grocery List"/>
      <Content />
      <Footer />

    </div>
  );
}

export default App;

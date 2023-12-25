import axios from 'axios';
import logo from './logo.svg';
import './App.css';


function App() {
  const [products, setProducts] = userState([]);

  async function getProducts() {
    const products = (await axios.get('http://localhost:8000/products')).data;
    setProducts(products);
  }
  useEffect(() => {
    getPersons()
  },[]);
}

export default App;

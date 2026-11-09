import './App.css';
import Welcome  from './components/Welcome';
import { useState } from 'react';
import Items from './pages/Items';
import Header from './components/Header';
import Carousel from './components/Carousel';
function App() {
fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    console.log(data.products);
    setProducts(data.products);
  })
  .catch(err => console.error(err));

const [products, setProducts] =useState([]);
 return (
  <div className='container'>
    <div className='row'>
  {
    products.map((product) => (
      <div className="col col-lg-3 col-6 mb-4" key={product.id}>
        <Welcome key={product.id} title={product.title} price={product.price} img={product.thumbnail} description={product.description}/>
      </div>
    ))
  }
  </div>
  </div>

);
}

export default App;
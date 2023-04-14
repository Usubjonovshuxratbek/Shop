import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import { useEffect, useState } from 'react';

function App() {
  const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('https://63df32c43d94d02c0bb5c567.mockapi.io/posts')
            .then(function (response) {
                // handle success
                console.log(response);
                setProduct(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Home products={product}/>} />
        <Route path='/blog' element={<Blog products={product}/>} />
      </Routes>
    </div>
  );
}
export default App;

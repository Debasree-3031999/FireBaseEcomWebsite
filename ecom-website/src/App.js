import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import AddProducts from './components/AddProducts';
import { ProductsContextProvider } from './global/ProductsContexr';
import Signup from './components/Signup';
import Login from './components/Login';



function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>

          <Route path='/addproducts' exact element={<AddProducts />}></Route>
          <Route path='/signup' exact element={<Signup />}></Route>
          <Route path='/login' exact element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </ProductsContextProvider>
  
  );
}

export default App;

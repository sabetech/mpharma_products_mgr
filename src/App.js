import './App.css';
import Products from './views/products';
import {loadProductsState, saveProductsState, isLocalStorageEmpty } from './state_mgr/localstorage';
import { normalize, schema } from 'normalizr';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state_mgr';
import { useEffect } from 'react';
import axios from 'axios';


function App() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {loadProducts} = bindActionCreators(actionCreators, dispatch);

  const price = new schema.Entity('prices');
  const myProductSchema = new schema.Entity('products', {
    prices: [price]
  });
  
  useEffect(() => {
    //check if localstorage is empty ...
    if (isLocalStorageEmpty()){
      axios("http://www.mocky.io/v2/5c3e15e63500006e003e9795").then((response) => {
        
        const normalizedProducts = normalize(response.data.products, [myProductSchema]);
        loadProducts(normalizedProducts);

      });
    }
    
  },[]);

  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;

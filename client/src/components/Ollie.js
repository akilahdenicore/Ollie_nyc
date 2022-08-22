
import React, { useState, useEffect } from "react";
import App from './App';

function Ollie() {
 const [products, setProducts] = useState(null);

useEffect(() => {
   fetchProducts();
}, []);

 function fetchProducts() {
      fetch("/menu").then((r) => {
        if (r.ok) {
          r.json().then((products) => setProducts(products));
        }
    });}
    return (<App products={products}/>)
        
}

export default Ollie;
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function ProductPage() {
    const [product, setProduct] = useState([])
    const { id } = useParams();

    const getProduct = () => {
        fetch(`/products/${id}`) 
          .then((response) => response.json())
          .then((response) => {
            setProduct(response);
          })
          .catch((error) => console.log(error));
      };

    useEffect(() => {
     getProduct();
    }, []);

    console.log(product)

  return (
    <div>
        <h1>{product.product}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
    </div>
  )
}

export default ProductPage
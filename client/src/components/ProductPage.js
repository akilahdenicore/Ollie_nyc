import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ReviewCard from './ReviewCard';
import AddReviewForm from './AddReviewForm';
import ProductLoggedIn from './ProductLoggedIn';
import ProductLoggedOut from './ProductLoggedOut';
import "../styles/ProductPage.css"

function ProductPage({user, isLoggedIn}) {
    const [product, setProduct] = useState({ reviews: []})
    const { id } = useParams();

    const getProduct = () => {
        fetch(`/products/${id}`) 
          .then((response) => response.json())
          .then((response) => {
            setProduct(response);
          })
          .catch((error) => console.log(error));
      };

      // function which has logic to display div with AddReviewForm
      // Needs to check if user is logged in to display the component
      // Renders without it otherwise



    useEffect(() => {
     getProduct();
    }, []);

    console.log(product)

    if (!user) {
      return <ProductLoggedOut user={user} product={product} getProduct={getProduct}/>
    }
    return <ProductLoggedIn user={user} product={product} getProduct={getProduct}/>
}


export default ProductPage
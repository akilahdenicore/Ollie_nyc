import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ReviewCard from './ReviewCard';
import AddReviewForm from './AddReviewForm';

function ProductPage({user}) {
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

    useEffect(() => {
     getProduct();
    }, []);

    console.log(product)

  return (
    <div>
        <div>
        <h1>{product.product}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        </div>
        <AddReviewForm product={product} user={user} getProduct={getProduct}/>
        <div>
            {product.reviews.map((review) =>{
                return (
                    <div>
                        <ReviewCard key={review.id} review={review} getProduct={getProduct}/>
                    </div>
                );
                })}
        </div>
    </div>
  )
}


export default ProductPage
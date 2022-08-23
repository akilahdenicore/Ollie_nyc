import React from 'react'
import ReviewCard from './ReviewCard';

function ProductLoggedOut({user, product, getProduct}) {
  return (
    <div>
        <div>
        <h1>{product.product}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <h4>Reviews</h4>
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

export default ProductLoggedOut
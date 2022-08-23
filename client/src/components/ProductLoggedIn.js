import React from 'react'
import AddReviewForm from './AddReviewForm';
import ReviewCard from './ReviewCard';

function ProductLoggedIn({user, product, getProduct}) {

  const openModalHandler = () => {
    document.querySelector(".review-modal").style.display = "flex";
  };
  return (
    <div>
        <div>
        <h1>{product.product}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <AddReviewForm user={user} product={product} getProduct={getProduct}/>
        <h4>Reviews</h4>
        <button onClick={openModalHandler}>Add a Review</button>
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

export default ProductLoggedIn
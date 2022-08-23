import React from 'react'

function ReviewCard({review, getProduct}) {
    
  const handleDelete = () => {
        fetch(`/reviews/${review.id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            getProduct();
          } else {
            r.json().then((err) => alert(err.errors));
          }
        });
      };
      
  return (
    <div>
         <p>
            Rating: {review.rating} Stars
        </p>
        <h3>
            "{review.product_review}"
        </h3>
        <button className="delete-review" onClick={handleDelete}>Remove Review</button>
       
    </div>
  )
}

export default ReviewCard
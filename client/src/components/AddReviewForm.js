import React, { useState } from 'react'
import "../styles/addReviewForm.css"

function AddReviewForm({user, product, getProduct}) {
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");

    console.log(user)

    function handleSubmit(e) {
      e.preventDefault(); //prevent page from refreshing
//fetch request with POST
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        rating: rating,
        product_review: review,
        user_id: user.id,
        product_id: product.id
      }),
    })
    .then((r) => {
      if (r.ok) {
        e.target.reset();
        r.json();
      }
      getProduct();
    });
  }

  const closeModalHandler = () => {
    document.querySelector(".review-modal").style.display = "none";
  };




  return (
    <div className="review-modal">
    <h2 class="add-review">Add a Review</h2>
       <form class="menu-form"onSubmit={handleSubmit}>
          <input
         type="text"
         name="Rating"
         placeholder="Rating"
         onChange={(e) => setRating(e.target.value)}
         />
          <input
            type="text"
            name="Review"
            placeholder="Review"
            onChange={(e) => setReview(e.target.value)}
          />
        <button type="submit">Submit Your Review</button>
        </form>
        <button onClick={closeModalHandler}>Close</button>
    </div>
  );
}

export default AddReviewForm;


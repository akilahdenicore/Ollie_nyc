import React, { useEffect, useState } from 'react'

const Cart = () => {
    

    

    useEffect(() => {
      fetchCart();
    }, []);


  return (
    <div>Cart</div>
  )
}

export default Cart
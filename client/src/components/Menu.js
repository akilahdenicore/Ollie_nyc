import React from 'react'
import ProductCard from './ProductCard';


function Menu({products, user}) {
  return (
    <div>
           <h1>Menu</h1>
        {products.map((product) => {
            return <ProductCard key={product.id} product={product} user={user}/>;
          })}
    </div>
  )
}

export default Menu
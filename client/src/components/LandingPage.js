import React from 'react'
import ProductCard from './ProductCard';

function LandingPage( {products, user} ) {

 console.log(products)




  return (

    
    <div>
        <div>
        
        <button className="learn-more">Learn More</button>
        {/* will navigate to menu */}
        </div>
        {/* <ProductContainer products={products}/> */}
        <div>
          <h2>Menu</h2>
        {products.map((product) => {
            return <ProductCard key={product.id} product={product} user={user}/>;
          })}
        </div>
    </div>
  )
}

export default LandingPage
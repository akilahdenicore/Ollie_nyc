import React from 'react'
import ProductCard from './ProductCard';

function LandingPage( {products} ) {

 console.log(products)




  return (

    
    <div>
        <div>
        <h1>Ollie</h1>
        <button className="learn-more">Learn More</button>
        {/* will navigate to menu */}
        </div>
        {/* <ProductContainer products={products}/> */}
        <div>
          <h2>This is the Menu!</h2>
        {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
    </div>
  )
}

export default LandingPage
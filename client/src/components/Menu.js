import React from 'react'
import ProductCard from './ProductCard';
import "../styles/menu.css" 




function Menu({products, user}) {
  return (
    // <div className="menu-container">
    //        <h1>Menu</h1>
    //     {products.map((product) => {
    //         return <ProductCard key={product.id} product={product} user={user}/>;
    //       })}
    // </div>
    <div className="body dark-background">
      <div className="outer-border">
         <div className="mid-border">
            <div className="inner-border">
              {/* <img className="corner-decoration corner-left-top" src={"https://i.ibb.co/4mKvK3N/corner-decoration.jpg"}/>
              <img className="corner-decoration corner-right-top" src={"https://i.ibb.co/4mKvK3N/corner-decoration.jpg"}/>
              <img className="corner-decoration corner-right-bottom" src={"https://i.ibb.co/4mKvK3N/corner-decoration.jpg"}/>
              <img className="corner-decoration corner-left-bottom" src={"https://i.ibb.co/4mKvK3N/corner-decoration.jpg"}/>
              <img className="vertical-decoration top" src={"https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"}/>
              <img className="vertical-decoration bottom" src={"https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"}/> */}

               {/* <!-- Page Content --> */}
               <div className="container">
                        <h1>Menu</h1>
                        {products.map((product) => {
                          return <ProductCard key={product.id} product={product} user={user}/>;
                          })}
               </div>
            </div>
         </div>
      </div>
</div>
  )
}

export default Menu
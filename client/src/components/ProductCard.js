import React, { useState } from 'react'

function ProductCard({productName}) {
  const {product, description, price} = product

  return (
   <li className="product-card">
    <div>
        <h3>{product}</h3>
        <p className="description">{description}</p>
        <p>${product.price.toLocaleString()}</p>
        </div>
    </li>
  )
}

export default ProductCard




// import React from 'react'

// function MenuItemCard({menuItem}) {
//   return (
//     <div>
      
//         <h3>
//             {menuItem.item_name}
//         </h3>
//         <p class="item-description">{menuItem.description}</p>
//         <p>${menuItem.price.toLocaleString()}</p>
//     </div>
//   )
// }

// export default MenuItemCard
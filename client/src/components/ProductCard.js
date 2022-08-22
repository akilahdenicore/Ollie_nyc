import React, { useState } from 'react'

function ProductCard({product}) {
  // const {product, description, price} = product

  return (
    <div className='product-card'>
        <h3>{product.product}</h3>
        <p className="description">{product.description}</p>
        <p>${product.price}</p>
    </div>
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
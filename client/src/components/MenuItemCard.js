import React from 'react'

function MenuItemCard({menuItem}) {
  return (
    <div>
        <h3>
            {menuItem.item_name}
        </h3>
        <p>{menuItem.description}</p>
        <p>${menuItem.price.toLocaleString()}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default MenuItemCard
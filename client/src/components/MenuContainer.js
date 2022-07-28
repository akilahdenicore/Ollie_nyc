import React, { useState, useEffect } from 'react'
import MenuItemCard from './MenuItemCard';

function MenuContainer( ) {
    const [menuItems, setMenuItems] = useState([])
    

    const getMenuItems = () => {
        fetch("/menu_items")
          .then((response) => response.json())
          .then((response) => {
            setMenuItems(response);
          })
          .catch((error) => console.log(error));
      };

      useEffect(() => {
        getMenuItems();
      }, []);

      console.log(menuItems)


  return (
    <div>
      {menuItems.map((menuItem) => {
        return <MenuItemCard key={menuItem.id} menuItem={menuItem} />;
      })}

    </div>
  )
}

export default MenuContainer
import React, { useState, useEffect } from 'react'



import ProductCard from './ProductCard';

function ProductContainer( ) {
    const [products, setProducts] = useState([])
    

    const getProducts = () => {
        fetch("/products")
          .then((response) => response.json())
          .then((response) => {
            setProducts(response);
          })
          .catch((error) => console.log(error));
      };

      useEffect(() => {
        getProducts();
      }, []);

      console.log(products)


  return (
    <div>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}

    </div>
  )
}

export default ProductContainer


































// import ProductCard from './ProductCard';

// function ProductContainer({products}) {
//   const productCard = products.map((product) => (
//     <ProductCard
//       key={product.id}
//       product
//       />
//   ))

//   return (
//     <ul className="cards">
//       {productCard}
//     </ul>
//   )
// }
  


// export default ProductContainer

//   const getProducts = () => {
//       fetch("/products")
//         .then((response) => response.json())
//         .then((response) => {
//           setProducts(response);
//         })
//         .catch((error) => console.log(error));
//     };

//     useEffect(() => {
//       getProducts();
//     }, []);

//     console.log(products)


// return (
//   <div>
//     {products}
//   </div>
// )



// import MenuItemCard from './MenuItemCard';

// function MenuContainer( ) {
//     const [menuItems, setMenuItems] = useState([])
    

//     const getMenuItems = () => {
//         fetch("/menu_items")
//           .then((response) => response.json())
//           .then((response) => {
//             setMenuItems(response);
//           })
//           .catch((error) => console.log(error));
//       };

//       useEffect(() => {
//         getMenuItems();
//       }, []);

//       console.log(menuItems)


//   return (
//     <div>
//       {menuItems.map((menuItem) => {
//         return <MenuItemCard key={menuItem.id} menuItem={menuItem} />;
//       })}

//     </div>
//   )
// }

// export default MenuContainer
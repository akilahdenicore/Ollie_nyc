import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";




 function App() { 
    
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([]);
  


    useEffect(() => {
      //auto-login
      // fetchUser();
      fetchProducts();
    }, []);
  
    function fetchUser() {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }

    function fetchProducts() {
      fetch("/menu").then((r) => {
        if (r.ok) {
          r.json().then((products) => setProducts(products));
        }
    });}

  
    // if (!user) return <LoginPage onLogin={setUser} />;
    // if (!user) return <LandingPage products={products} onLogin={setUser} />;


    //LOGIC- if logged in, signup and login doesn't display
  console.log(products)
  
    return (
      <div className='App'>
        <NavBar onLogin={setUser}/>
        <Routes>
          {/* <Route exact path="/" element={<LoginPage onLogin={setUser}/>}/> */}
          <Route exact path="/" element={<LandingPage products={products} onLogin={setUser}/>}/>
          <Route path="/menu/:id" element={<ProductPage/>}/>
        </Routes>
      </div>
    )
  
  }
  
  export default App;
    
  
  
  
  
  
  
  
  

// function App(){
//   const [products, setProducts] = useState(null);
//   useEffect(() => {
//     fetchProducts();
//   }, []);
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

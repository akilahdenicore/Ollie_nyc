import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import Menu from "./Menu";
import Footer from "./Footer";
import "../App.css"




 function App() { 
    
    const [user, setUser] = useState(null);
    const [products, setProducts] = useState([]);
    let isLoggedIn = false;

    useEffect(() => {
      //auto-login
      fetchUser();
      fetchProducts();
    }, []);
  
    function fetchUser() {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
        let isLoggedIn = true;
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
  console.log("this is from app.js", user)
  
    return (
      <div className='App'>
        <NavBar onLogin={setUser} user={user}/>
        <LoginPage onLogin={setUser} fetchUser={fetchUser} isLoggedIn={isLoggedIn}/>
        <Routes>
          {/* <Route exact path="/" element={<LoginPage onLogin={setUser}/>}/> */}
          <Route exact path="/" element={<LandingPage products={products} onLogin={setUser} user={user}/>}/>
          <Route path="/menu/:id" element={<ProductPage user={user} isLoggedIn={isLoggedIn} />}/>
          <Route path="/menu" element={<Menu products={products}/>}/>
        </Routes>
        <Footer/>
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

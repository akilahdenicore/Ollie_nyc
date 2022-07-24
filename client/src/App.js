import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
    .then((r) => r.json())
    .then ((data) => setCount(data.count));
}, []);

  return (
    <div className='App'>
    {/* <Routes> 
      <Route path="testing"/> */}
      <h1>Test Route</h1>
      {/* <Route exact path="/"/> */}
      {/* <h1>Page Count: {count}</h1> */}
    {/* </Routes> */}
    </div>
  )

}

export default App;
  
















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

import './App.css';
import React, { useState, useEffect } from "react";


function App() {

  const [data, setdata] = useState([]);

   useEffect(() => {
      fetch('https://api.lanyard.rest/v1/users/1224088617270382763')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setdata(data);
         })

   }, []);
  

  return (
    <div className="App">
      <header className="App-header">
      <h1></h1>

      </header>
    </div>
  );
}

export default App;
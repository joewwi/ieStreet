import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Leagues from './components/Leagues'



function App() {
  const [status, setStatus] = useState(false)
  const [search, setSearch] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:9292`)
      .then(res => res.json())
      .then(intro => {
        console.log(intro);
        setStatus(true);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);


  // function handleSearch(e){
  //   const value = e.target.value
  //   console.log(value);
  //   setSearch(value)
  // }

  return<div>
    {status && <Home/>}
  </div>
}

export default App;

import React, { useState, useEffect} from 'react'
import 'boxicons'
import '../css/Footer.css'
import 'bootstrap'

function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    setCurrentYear(year.toString());
  }, []);


  return (
    <div>
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear">{currentYear}</span> All Rights Reserved. Design by
            <a href="https://html.design/">Martin joe</a>
          </p>
        </div>
      </footer>
    </div>    
  )
}

export default Footer

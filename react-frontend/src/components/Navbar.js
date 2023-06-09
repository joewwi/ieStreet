import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "bootstrap"
import "boxicons"
import '../css/Navbar.css'

function Navbar({ search, handleSearch }) {
    
  return (
      <div className="sub_page">
          <div className="hero_area">
              <header className="header_section">
                  <div className="container-fluid">
                      <nav className="navbar navbar-expand-lg custom_nav-container d-block">
                          <div className="main_nav_menu">
                              <a className="navbar-brand" href="/">
                                  <span>
                                    <Link to="/"><i class="bi bi-house"></i> ieStreet</Link>
                                  </span>
                              </a>
                              <div className="user_option">
                                  <Link to="/news"><i class="bi bi-browser-firefox"></i>News</Link>
                                  <Link to="/teams"><i class="bi bi-browser-firefox"></i>Teams</Link>
                                  <Link to="/players"><i class="bi bi-browser-firefox"></i>Players</Link>
                                  <Link to="/stats"><i class="bi bi-browser-firefox"></i>Stats</Link>
                                  <a href="#">
                                     login
                                  </a>
                                <form className="form-inline ">
                                  <button className="btn  nav_search-btn" type="submit"></button>
                                  <input
                                    className='search-input'
                                    type='text'
                                    placeholder='Search'
                                    value={search}
                                    id='search'
                                    onChange={(e) => handleSearch(e)}
                                  /> 
                                </form>
                              </div>
                          </div>
                      </nav>
                  </div>
              </header>
          </div>
      </div>
  )
}

export default Navbar


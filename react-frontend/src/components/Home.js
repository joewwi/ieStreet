import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News_list from './News_list';
import About from './About';
import Footer from './Footer';
import Navbar from './Navbar';
import 'boxicons'
import '../css/responsive.css'
import '../css/bootstrap.css'
import '../css/style.css'
import '../css/style.scss'
import '../css/style.css.map'
import '../js/custom.js'

function HomePage() {
  const [news, setNews] = useState([])
  const [search, setSearch] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/news`)
      .then(res => res.json())
      .then(data => {
        setNews(data)
      })
      .catch(error => {
        console.log("Error fetching data:", error)
      })
  }, [])


  function handleSearch(e) {
    const query = e.target.value;
    setSearch(query)


    // Filter songs based on search query
    const filteredNews = news.filter((article) => {
      return (
        article.title && article.title.toLowerCase().includes(query?.toLowerCase()) ||
        article.artist && article.artist.toLowerCase().includes(query?.toLowerCase())
      );
    });

    // Filter albums based on search query



    setNews(filteredNews);
    // setAlbums(filteredAlbums);
  }

  return (
    <>
      <Navbar search={search} handleSearch={handleSearch} />
      <News_list news={news} />
      <About />
      <Footer />
    </>
  );
}

function Home() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/news" element={<News_list />} />
        <Route path="/teams" element={<News_list />} />
        <Route path="/players" element={<News_list />} />
        <Route path="/stats" element={<News_list />} />
      </Routes>
    </Router>
  );
}

export default Home;

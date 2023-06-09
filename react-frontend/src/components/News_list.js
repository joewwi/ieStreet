import React, { useEffect, useState } from 'react';
import News from './News';
import '../css/bootstrap.css';
import '../css/News.css';

function NewsList({ news }) {
  const [articles, setArticles] = useState(news);
  const [sortBy, setSortBy] = useState('league'); // Default sort option

  useEffect(() => {
    fetch(`http://localhost:9292/news`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
      });
  }, []);

  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    setSortBy(selectedSortOption);
    sortArticles(selectedSortOption);
  };

  const sortArticles = (sortOption) => {
    const sortedArticles = [...articles];

    if (sortOption === 'league') {
      sortedArticles.sort((a, b) => {
        const leagueA = a.league || '';
        const leagueB = b.league || '';
        return leagueA.localeCompare(leagueB);
      });
    } else if (sortOption === 'date') {
      sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === 'likes') {
      sortedArticles.sort((a, b) => b.likes - a.likes);
    }

    setArticles(sortedArticles);
  };

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <label className="sort-label">Sort by:</label>
        <select className="sort-select" value={sortBy} onChange={handleSortChange}>
          <option value="league">League</option>
          <option value="date">Date</option>
          <option value="likes">Likes</option>
        </select>
      </div>
      <div className="carousel-inner">
        {articles.map((article) => (
          <News article={article} key={article.id} />
        ))}
      </div>
    </>
  );
}

export default NewsList;

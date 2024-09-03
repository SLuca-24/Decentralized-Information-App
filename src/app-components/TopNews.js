import React from 'react';
import '../css/TopNews.css';

function TopNews(props) {
  return (
    <div className="news-section">
      <h2>Latest Breaking News</h2>
      <div className="news-container">
          <div className="news-item">
            <img src={props.image} alt="breaking-news-img" />
            <h3>{props.title}</h3>
          </div>
      </div>
    </div>
  );
}

export default TopNews;

import React from "react";
import '../css/NewsCategories.css';


function NewsCategories() {
    const categories = [
        {
          title: 'Politica',
          image: 'https://via.placeholder.com/300x200?text=Politica',
        },
        {
          title: 'Economia',
          image: 'https://via.placeholder.com/300x200?text=Economia',
        },
        {
          title: 'Crypto',
          image: 'https://via.placeholder.com/300x200?text=Crypto',
        },
        {
          title: 'Sport',
          image: 'https://via.placeholder.com/300x200?text=Sport',
        },
        {
          title: 'Spettacolo',
          image: 'https://via.placeholder.com/300x200?text=Spettacolo',
        },
        {
          title: 'Alimentazione',
          image: 'https://via.placeholder.com/300x200?text=Alimentazione',
        },
      ];
    
      return (
        <div className="categories-section">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img src={category.image} alt={category.title} />
              <h3>{category.title}</h3>
              <button className="explore-button">Esplora</button>
            </div>
          ))}
        </div>
  );
}

export default NewsCategories;

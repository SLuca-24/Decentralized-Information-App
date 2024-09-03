import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import TopNews from './app-components/TopNews';
import Header from './app-components/Header'
import NewsCategories from './app-components/NewsCategories'
import ValidatorsSection from './app-components/ValidatorsSection'
import Footer from './app-components/footer'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className="top-news-section">
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking News 1"
    />
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking News 2"
    />
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking News 3"
    />
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking News 4"
    />
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking News 5"
    />
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking News 15435"
    />
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking Newewrewrs 1"
    />
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking News 1"
    />
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking News 1"
    />
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking News 1"
    />
    <TopNews 
    image="https://via.placeholder.com/300x200"
    title="Breaking News 1"
    />
    </div>
    <NewsCategories />
    <ValidatorsSection />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import '/src/css/Archive.css';
import React, { useEffect, useState } from 'react';

import { URLS } from '/src/urls.js';
import { fetchWithAuth } from '../../Auth/auth.js';
import ArchivePopup from './ArchivePopup.js';

import ArchiveArticle from './ArchiveArticle.js';

export default function Archive() {
  const [articles, setArticles] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentArticleID, setCurrentArticleID] = useState(null);

  useEffect(() => {
    fetchWithAuth(URLS.archive)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setArticles(data))
    .catch(error => console.error('Ошибка при получении статей:', error));
  }, []);

  const handleRefreshArticles = () => {
    fetchWithAuth(URLS.archive)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setArticles(data))
    .catch(error => console.error('Ошибка при получении статей:', error));
  };  

  const handleShowPopup = (articleID) => {
    setCurrentArticleID(articleID);
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  if (!articles.length) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="archive">

      <h1 className="archive__title title">Архив</h1>

      <ul className="archive__list">
        
        {articles.map(article => (
          <ArchiveArticle
            key={article.id}
            articleID={article.id}
            title={article.title}
            author={article.author}
            date={article.creation_date}
            onShowPopup={handleShowPopup}
          />
        ))}

      </ul>

      {isPopupVisible && 
        <ArchivePopup 
          articleID={currentArticleID} 
          onClose={handleClosePopup} 
          onRestoreSuccess={() => {
            handleRefreshArticles();
            handleClosePopup();
          }} 
        />
      }
    </div>
  )
}

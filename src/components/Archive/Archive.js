import React, { useEffect, useState } from 'react';
import '/src/css/Archive.css';
import ArchiveArticle from './ArchiveArticle.js';
import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "/src/auth.js";

export default function Archive() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchWithAuth(URLS.archive)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setArticles(data))
    .catch(error => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="archive">

      <h1 className="archive__title title">Архив</h1>

      <ul className="archive__list">
        
      {articles.map(article => (
          <ArchiveArticle
            key={article.id}
            title={article.title}
            author={article.authorID}
            date={article.creation_date}
          />
      ))}

      </ul>

    </div>
  )
}

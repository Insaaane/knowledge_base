import '/src/css/ArticlesList.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "/src/auth.js";

import ArticleItem from './ArticleItem';

import AddIcon from "/markup/img/add-icon.svg";
import VersionPointIcon from "/markup/img/version-point-icon.svg";

const styles = {
  addIcon: {
    background: `url(${AddIcon}) no-repeat left 6px`
  },
  versionPointIcon: {
    background: `url(${VersionPointIcon}) no-repeat left 6px`
  }
};

export default function ArticlesList() {
  const { id } = useParams();
  const [folderData, setFolderData] = useState(null);

  const URL = `${URLS.folders}${id}/`;

  useEffect(() => {
    fetchWithAuth(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFolderData(data))
      .catch(error => console.error('Ошибка при получении статей:', error));
  }, []);

  if (!folderData) {
    return <div></div>;
  }

  return (
    <div className="art-list">

      <h1 className="art-list__title title">Статьи блока «{folderData.title}»</h1>

      <Link to='/article-editor' state={{ folderID: id }}>
        <button className="art-list__add-article-btn" style={styles.addIcon}>добавить статью</button>
      </Link>

      <ul className="art-list__list">

        {folderData.articles.map(article => (
          <ArticleItem 
            key={article.id}
            article={article}
          />
        ))}

      </ul>

    </div>
  )
}

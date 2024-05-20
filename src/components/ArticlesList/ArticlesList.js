import React, { useState, useEffect } from 'react';
import '/src/css/ArticlesList.css';
import AddIcon from "/markup/img/add-icon.svg";
import VersionPointIcon from "/markup/img/version-point-icon.svg";
import { Link, useParams } from 'react-router-dom';
import ArticleItem from './ArticleItem';
import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "/src/auth.js";

const styles = {
  addIcon: {
    background: `url(${AddIcon}) no-repeat left 6px`
  },
  versionPointIcon: {
    background: `url(${VersionPointIcon}) no-repeat left 6px`
  }
}

export default function ArticlesList() {
  const { id } = useParams();
  const [folderData, setFolderData] = useState(null);

  useEffect(() => {
    fetchWithAuth(`${URLS.folders}${id}/`)
      .then(response => response.json())
      .then(data => {
        setFolderData(data);
      })
      .catch(error => console.error("Error fetching articles:", error));
  }, [id]);

  if (!folderData) {
    return <div>Loading</div>;
  }

  return (
    <div className="art-list">

      <h1 className="art-list__title title">Статьи блока «{folderData.title}»</h1>

      <Link to='/article-editor'>
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

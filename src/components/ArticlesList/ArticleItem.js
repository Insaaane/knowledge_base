import React from 'react';
import '/src/css/ArticlesList.css';
import VersionPointIcon from "/markup/img/version-point-icon.svg";
import { Link } from 'react-router-dom';
import { formatDate } from '/src/util.js';

const styles = {
  versionPointIcon: {
    background: `url(${VersionPointIcon}) no-repeat left 6px`
  }
}

export default function ArticleItem({ article }) {
  return (
    <li className="art-list__item" style={styles.versionPointIcon}>
      <Link to='/article'>
        <h2 className="art-list__art-title">{article.title}</h2>
      </Link>
      <div className="art-list__item_info">
        <p className="art-list__info_label">Автор: <span className="art-list__label_text">{article.author}</span></p>
        <p className="art-list__info_label">Дата: <span className="art-list__label_text">{formatDate(article.creation_date)}</span></p>
      </div>
    </li>
  )
}

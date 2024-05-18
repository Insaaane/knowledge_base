import React from 'react';
import '/src/css/Archive.css';
import VersionPointIcon from "/markup/img/version-point-icon.svg";
import RestoreIcon from "/markup/img/restore-icon.svg";

import { formatDate } from '/src/util.js';

const styles = {
  versionPointIcon: {
    background: `url(${VersionPointIcon}) no-repeat left 6px`
  },
  restoreIcon: {
    background: `url(${RestoreIcon}) no-repeat right center`
  }
}

export default function ArchiveArticle({ title, author, date }) {
  return (
  <li className="archive__item" style={styles.versionPointIcon}>
    <div className="archive__item-wrap">
      <h2 className="archive__item-title">{title}</h2>

      <div className="archive__item_info">
        <p className="archive__info_label">Текст: <span className="archive__label_text">{author}</span></p>
        <p className="archive__info_label">Дата: <span className="archive__label_text">{formatDate(date)}</span></p>
      </div>
    </div>
  
    <button className="archive__restore-btn" style={styles.restoreIcon}>Восстановить</button>
  </li>
  )
}

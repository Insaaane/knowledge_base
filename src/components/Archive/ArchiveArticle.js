import '/src/css/Archive.css';
import React from 'react';

import { formatDate } from '/src/util.js';
import { fetchWithAuth } from '../../Auth/auth.js';
import { URLS } from '../../urls.js';

import VersionPointIcon from '/markup/img/version-point-icon.svg';
import RestoreIcon from '/markup/img/restore-icon.svg';


const styles = {
  versionPointIcon: {
    background: `url(${VersionPointIcon}) no-repeat left 6px`
  },
  restoreIcon: {
    background: `url(${RestoreIcon}) no-repeat right center`
  }
};

export default function ArchiveArticle({ articleID, title, author, date, onRestoreSuccess  }) {
  const handleRestore = () => {
    const url = `${URLS.restore}${articleID}/`;
    const body = { folderID: 1 };
  
    fetchWithAuth(url, {
      method: 'POST',
      body: JSON.stringify(body),
    })
    .then(response => {
      if (!response.ok) {
        if (response.status === 403) {
          alert('У вас нет доступа к этой статье.'); 
        } else {
          throw new Error('Network response was not ok');
        }
      } else {
        onRestoreSuccess();
      }
    })
    .catch(error => console.error('Error restoring article:', error));
  };

  return (
  <li className="archive__item" style={styles.versionPointIcon}>
    <div className="archive__item-wrap">
      <h2 className="archive__item-title">{title}</h2>

      <div className="archive__item_info">
        <p className="archive__info_label">Текст: <span className="archive__label_text">{author}</span></p>
        <p className="archive__info_label">Дата: <span className="archive__label_text">{formatDate(date)}</span></p>
      </div>
    </div>
  
    <button className="archive__restore-btn" style={styles.restoreIcon} onClick={handleRestore}>Восстановить</button>
  </li>
  )
}

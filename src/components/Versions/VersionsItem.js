import React from 'react';
import '/src/css/Versions.css';
import Avatar from "/markup/img/avatar-circle.png";
import VersionPoint from "/markup/img/version-point-icon.svg";

import { formatDate } from '/src/util.js';

const styles = {
  versionPoint: {
    background: `url(${VersionPoint}) no-repeat left top`
  }
}

function Changes({ changes }) {
  if (changes == null) {
    return
  }

  return (
  <div className="versions__changes">
    <p className="versions__changes_title">Что изменено?</p>
    <p className="versions__changes_item">{changes}</p>
  </div>
  )
}

export default function VersionsItem({ author, date, changes, index, array }) {
  let isFirst = "Изменено";

  if (index === array.length - 1) {
    isFirst = "Создано";
  }

  return (
  <li className="versions__item" style={styles.versionPoint}>
    <p className="versions__item_about">{isFirst} <span className="versions__item_date">{formatDate(date)}</span></p>
    
    <div className="versions__changes_wrap">
      <Changes changes={changes}/>
      
      <div className="versions__author-wrap">
        <img src={Avatar} alt="Аватар пользователя" className="versions__author_avatar"/>
        <p className="versions__author_name">{author}</p>
      </div>
    </div>
  </li>
  )
}

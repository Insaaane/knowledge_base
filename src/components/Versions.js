import React from 'react';
import '../css/Versions.css';
import Avatar from "/Users/daybo/Desktop/knowledge_base/markup/img/avatar-circle.png";
import VersionPoint from "/Users/daybo/Desktop/knowledge_base/markup/img/version-point-icon.svg";

const styles = {
  versionPoint: {
    background: `url(${VersionPoint}) no-repeat left top`
  }
}

export default function Versions() {
  return (
  <div className="versions">
      
    <h1 className="versions__title title">Версии статьи</h1>

      <ul className="versions__list">

        <li className="versions__item" style={styles.versionPoint}>
          <p className="versions__item_about">Изменено <span className="versions__item_date">21 декабря 2023</span></p>
          
          <div className="versions__changes_wrap">
            <div className="versions__changes">
              <p className="versions__changes_title">Что изменено?</p>
              <ul className="versions__changes_list">
                <li className="versions__changes_item">добавлены новые аспекты деятельности в связи с выходом нового документа</li>
                <li className="versions__changes_item">отредактировали старые изменения</li>
                <li className="versions__changes_item">снова какие-то изменения</li>
              </ul>
            </div>
            
            <div className="versions__author-wrap">
              <img src={Avatar} alt="Аватар пользователя" className="versions__author_avatar"/>
              <p className="versions__author_name">Emma Shifter</p>
            </div>
          </div>

        </li>

        <li className="versions__item" style={styles.versionPoint}>
          <p className="versions__item_about">Изменено <span className="versions__item_date">15 ноября 2023</span></p>
          
          <div className="versions__changes_wrap">
            <div className="versions__changes">
              <p className="versions__changes_title">Что изменено?</p>
              <ul className="versions__changes_list">
                <li className="versions__changes_item">добавлены новые аспекты деятельности в связи с выходом нового документа</li>
                <li className="versions__changes_item">отредактировали старые изменения</li>
              </ul>
            </div>
            
            <div className="versions__author-wrap">
              <img src={Avatar} alt="Аватар пользователя" className="versions__author_avatar"/>
              <p className="versions__author_name">Emma Shifter</p>
            </div>
          </div>

        </li>

        <li className="versions__item" style={styles.versionPoint}>
          <p className="versions__item_about">Изменено <span className="versions__item_date">6 октября 2023</span></p>
          
          <div className="versions__changes_wrap" hidden>
            <div className="versions__changes">
              <p className="versions__changes_title">Что изменено?</p>
              <ul className="versions__changes_list">
                <li className="versions__changes_item">добавлены новые аспекты деятельности в связи с выходом нового документа</li>
                <li className="versions__changes_item">отредактировали старые изменения</li>
                <li className="versions__changes_item">снова какие-то изменения</li>
              </ul>
            </div>
            
            <div className="versions__author-wrap">
              <img src={Avatar} alt="Аватар пользователя" className="versions__author_avatar"/>
              <p className="versions__author_name">Emma Shifter</p>
            </div>
          </div>

        </li>

      </ul>

    </div>
  )
}

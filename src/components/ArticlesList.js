import React from 'react';
import '../css/ArticlesList.css';
import AddIcon from "/Users/daybo/Desktop/knowledge_base/markup/img/add-icon.svg";
import VersionPointIcon from "/Users/daybo/Desktop/knowledge_base/markup/img/version-point-icon.svg";
import { Link } from 'react-router-dom';

const styles = {
  addIcon: {
    background: `url(${AddIcon}) no-repeat left 6px`
  },
  versionPointIcon: {
    background: `url(${VersionPointIcon}) no-repeat left 6px`
  }
}

export default function ArticlesList() {
  return (
    <div className="art-list">

      <h1 className="art-list__title title">Статьи блока «Нормативные документы»</h1>

      <Link to='/article-editor'>
        <button className="art-list__add-article-btn" style={styles.addIcon}>добавить статью</button>
      </Link>

      <ul className="art-list__list">

        <li className="art-list__item" style={styles.versionPointIcon}>
          <Link to='/article'>
            <h2 className="art-list__art-title">Статья о ФЗ №273 «Об образовании» и как его использовать
              в повседневной жизни </h2>
          </Link>
          <div className="art-list__item_info">
            <p className="art-list__info_label">Текст: <span className="art-list__label_text">Emma Shifter</span></p>
            <p className="art-list__info_label">Дата: <span className="art-list__label_text">21 декабря 2023</span></p>
          </div>
        </li>

        <li className="art-list__item" style={styles.versionPointIcon}>
          <Link to='/article'>
            <h2 className="art-list__art-title">Статья о ФЗ №273 «Об образовании» и как его использовать
              в повседневной жизни </h2>
          </Link>
          <div className="art-list__item_info">
            <p className="art-list__info_label">Текст: <span className="art-list__label_text">Emma Shifter</span></p>
            <p className="art-list__info_label">Дата: <span className="art-list__label_text">21 декабря 2023</span></p>
          </div>
        </li>

        <li className="art-list__item" style={styles.versionPointIcon}>
          <Link to='/article'>
            <h2 className="art-list__art-title">Статья о ФЗ №273 «Об образовании» и как его использовать
              в повседневной жизни </h2>
          </Link>
          <div className="art-list__item_info">
            <p className="art-list__info_label">Текст: <span className="art-list__label_text">Emma Shifter</span></p>
            <p className="art-list__info_label">Дата: <span className="art-list__label_text">21 декабря 2023</span></p>
          </div>
        </li>

        <li className="art-list__item" style={styles.versionPointIcon}>
          <Link to='/article'>
            <h2 className="art-list__art-title">Статья о ФЗ №273 «Об образовании» и как его использовать
              в повседневной жизни </h2>
          </Link>
          <div className="art-list__item_info">
            <p className="art-list__info_label">Текст: <span className="art-list__label_text">Emma Shifter</span></p>
            <p className="art-list__info_label">Дата: <span className="art-list__label_text">21 декабря 2023</span></p>
          </div>
        </li>
      </ul>

    </div>
  )
}

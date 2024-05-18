import React from 'react';
import '../css/Archive.css';
import VersionPointIcon from "/markup/img/version-point-icon.svg";
import RestoreIcon from "/markup/img/restore-icon.svg";

const styles = {
  versionPointIcon: {
    background: `url(${VersionPointIcon}) no-repeat left 6px`
  },
  restoreIcon: {
    background: `url(${RestoreIcon}) no-repeat right center`
  }
}

export default function Archive() {
  return (
    <div className="archive">

      <h1 className="archive__title title">Архив</h1>

      <ul className="archive__list">
        <li className="archive__item" style={styles.versionPointIcon}>
          <div className="archive__item-wrap">
            <h2 className="archive__item-title">Статья о ФЗ №273 «Об образовании» и как его использовать
              в повседневной жизни </h2>
            <div className="archive__item_info">
              <p className="archive__info_label">Текст: <span className="archive__label_text">Emma Shifter</span></p>
              <p className="archive__info_label">Дата: <span className="archive__label_text">21 декабря 2023</span></p>
            </div>
          </div>
        
          <button className="archive__restore-btn" style={styles.restoreIcon}>Восстановить</button>
        </li>

        <li className="archive__item" style={styles.versionPointIcon}>
          <div className="archive__item-wrap">
            <h2 className="archive__item-title">Статья о ФЗ №273 «Об образовании» и как его использовать
              в повседневной жизни </h2>
            <div className="archive__item_info">
              <p className="archive__info_label">Текст: <span className="archive__label_text">Emma Shifter</span></p>
              <p className="archive__info_label">Дата: <span className="archive__label_text">21 декабря 2023</span></p>
            </div>
          </div>
        
          <button className="archive__restore-btn" style={styles.restoreIcon}>Восстановить</button>
        </li>
        
        <li className="archive__item" style={styles.versionPointIcon}>
          <div className="archive__item-wrap">
            <h2 className="archive__item-title">Статья о ФЗ №273 «Об образовании» и как его использовать
              в повседневной жизни </h2>
            <div className="archive__item_info">
              <p className="archive__info_label">Текст: <span className="archive__label_text">Emma Shifter</span></p>
              <p className="archive__info_label">Дата: <span className="archive__label_text">21 декабря 2023</span></p>
            </div>
          </div>
        
          <button className="archive__restore-btn" style={styles.restoreIcon}>Восстановить</button>
        </li>

        <li className="archive__item" style={styles.versionPointIcon}>
          <div className="archive__item-wrap">
            <h2 className="archive__item-title">Статья о ФЗ №273 «Об образовании» и как его использовать
              в повседневной жизни </h2>
            <div className="archive__item_info">
              <p className="archive__info_label">Текст: <span className="archive__label_text">Emma Shifter</span></p>
              <p className="archive__info_label">Дата: <span className="archive__label_text">21 декабря 2023</span></p>
            </div>
          </div>
        
          <button className="archive__restore-btn" style={styles.restoreIcon}>Восстановить</button>
        </li>
      </ul>

    </div>
  )
}

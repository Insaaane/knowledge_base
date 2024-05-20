import React from 'react';
import '../css/ArticleEditor.css';

import FileIcon from "/markup/img/file-icon.svg";
import AddIcon from "/markup/img/add-icon.svg";
import SelectIcon from "/markup/img/select-btn-icon.svg";
import EditIcon from "/markup/img/edit-icon.svg";

const styles = {
  fileIcon: {
    background: `url(${FileIcon}) no-repeat right center`
  },
  addIcon: {
    background: `url(${AddIcon}) no-repeat left 6px`
  },
  selectIcon: {
    backgroundImage: `url(${SelectIcon})`
  }
}

export default function ArticleEditor() {
  return (
    <form className="art-editor" action="" method="post" enctype="multipart/form-data">

      <div className="art-editor__article">
        <textarea name="" id="" rows="1" className="art-editor__title-input" placeholder="Название статьи"></textarea>

        <label for="article-text" className="art-editor__article-label">Текст статьи</label>
  
        <textarea name="" id="article-text" className="art-editor__text-input" placeholder="Начните писать вашу статью тут..."></textarea>    

        <p className="art-editor__document">
          Документ:  
          <label for="input-doc" className="art-editor__doc-label" style={styles.fileIcon}> прикрепить ссылку на документ</label>
          <input className="art-editor__add-file" id="input-doc" type="file" hidden/>
        </p>
        
      </div>
      
      <div className="art-editor__formulas">
        <h2 className="art-editor__formulas_title">Список используемых формул</h2>
          
        <ul className="art-editor__formulas-list">

          <li className="art-editor__formulas-item">
            <p className="art-editor__formula_nubmer-wrap">
              [<span className="art-editor__formula_nubmer">1</span>]
            </p>
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="art-editor__formula_preview"/>
            <p className="art-editor__formula_name">формула для расчета квадрата суммы</p>
            <button className="art-editor__formula_edit-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="art-editor__formula_edit-icon"/>
            </button>
          </li>

          <li className="art-editor__formulas-item">
            <p className="art-editor__formula_nubmer-wrap">
              [<span className="art-editor__formula_nubmer">2</span>]
            </p>
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2-2xy" alt="Формула"
              className="art-editor__formula_preview"/>
            <p className="art-editor__formula_name">формула для расчета квадрата разности</p>
            <button className="art-editor__formula_edit-btn">
              <img src="./img/edit-icon.svg" alt="Редактировать формулу" className="art-editor__formula_edit-icon"/>
            </button>
          </li>

        </ul>

        <div className="art-editor__add-formulas-wrap">
          <button className="art-editor__new-formula-btn" style={styles.addIcon}>добавить новую формулу</button>

          <span className="art-editor__or">или</span>

          <select name="" id="" className="art-editor__select-formula" style={styles.selectIcon}>
            <option value="none" className="art-editor__select-item" selected>добавить имеющуюся формулу</option>
            <option value="Formula 1" className="art-editor__select-item">Formula 1</option>
            <option value="Formula 2" className="art-editor__select-item">Formula 2</option>
            <option value="Formula 3" className="art-editor__select-item">Formula 3</option>
          </select>
        </div>
      </div>

      <div className="art-editor__buttons-wrap">
        <button className="art-editor__cancle-btn">Отмена</button>
        <button type="submit" className="art-editor__public-btn">Опубликовать</button>
      </div>

    </form>
  )
}

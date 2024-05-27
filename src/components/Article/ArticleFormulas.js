import '/src/css/Article.css';
import '/src/css/ArticleEditor.css';
import React from 'react';

import ArticleFormulasItem from './ArticleFormulaItem.js';
import FormulaEditor from "../Formulas/FormulaEditor.js";

import AddIcon from "/markup/img/add-icon.svg";
import SelectIcon from "/markup/img/select-btn-icon.svg";

const styles = {
  addIcon: {
    background: `url(${AddIcon}) no-repeat left 6px`
  },
  selectIcon: {
    backgroundImage: `url(${SelectIcon})`
  }
};

export default function ArticleFormulas({ showButtons }) {

  return (
    <div className="article__formulas">
      <h2 className="article__formulas_title">Список используемых формул</h2>

      <ul className="article__formulas-list">
            
        <ArticleFormulasItem/>
        <ArticleFormulasItem/>
        <ArticleFormulasItem/>

      </ul>

      {showButtons &&
        <div className="art-editor__add-formulas-wrap">
          <button className="art-editor__new-formula-btn" style={styles.addIcon}>добавить новую формулу</button>

          <span className="art-editor__or">или</span>

          <select name="" id="" className="art-editor__select-formula" style={styles.selectIcon}>
            <option value="none" className="art-editor__select-item" defaultValue>добавить имеющуюся формулу</option>
            <option value="Formula 1" className="art-editor__select-item">Formula 1</option>
            <option value="Formula 2" className="art-editor__select-item">Formula 2</option>
            <option value="Formula 3" className="art-editor__select-item">Formula 3</option>
          </select>
        </div>
      }

      {showButtons && <FormulaEditor/>}

    </div>
  )
}

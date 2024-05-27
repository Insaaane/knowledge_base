import '/src/css/Article.css';
import '/src/css/ArticleEditor.css';
import React from 'react';

import ArticleFormulasItem from './ArticleFormulaItem.js';
import FormulaEditor from "../Formulas/FormulaEditor.js";
import ArticleFormulasSelect from "./ArticleFormulasSelect.js"

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

export default function ArticleFormulas({ showButtons, formulas }) {

  return (
    <div className="article__formulas">
      <h2 className="article__formulas_title">Список используемых формул</h2>

      <ul className="article__formulas-list">
        
        {formulas.map((formula) => (
          <ArticleFormulasItem key={formula.id} formula={formula} showButtons={showButtons}/>
        ))}

      </ul>

      {showButtons &&
        <div className="art-editor__add-formulas-wrap">
          <button className="art-editor__new-formula-btn" style={styles.addIcon}>добавить новую формулу</button>

          <span className="art-editor__or">или</span>

          <ArticleFormulasSelect/>
        </div>
      }

      {/* {showButtons && <FormulaEditor/>} */}

      
    </div>
  )
}

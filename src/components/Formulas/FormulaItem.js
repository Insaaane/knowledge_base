import React from 'react';
import "/src/css/FormulaEditor.css";
import EditIcon from "/markup/img/edit-icon.svg";
import { URLS } from '/src/urls.js';

export default function FormulaItem({ formula, onEdit }) {
  const formulaLink = `${URLS.formulaImg}${formula.formula}`;
  
  return (
    <li className="formulas-item">
      <span className="formula-editor__formula-name">{formula.title}</span>
      <div className="formulas__formula-wrap">
        <img src={formulaLink} alt="Формула" className="formula_preview"/>
        <button className="edit-formula-btn" onClick={() => onEdit(formula)}>
          <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
        </button>
      </div>
    </li>
  );
}

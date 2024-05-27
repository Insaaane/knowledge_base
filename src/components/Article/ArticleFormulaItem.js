import React from 'react';
import '/src/css/Article.css';

import EditIcon from "/markup/img/edit-icon.svg";

export default function ArticleFormulasItem({ formula, showButtons }) {

  return (
    <li className="article__formulas-item">
      <p className="article__formula_nubmer-wrap">
        [{formula.id}]
      </p>
      <img src={`https://latex.codecogs.com/svg.image?\\LARGE&space;${formula.formula}`} alt="Формула"
        className="article__formula_preview"/>
      <p className="article__formula_name">- {formula.title}</p>
      {showButtons && <button className="article__formula_edit-btn">
        <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
      </button>}
    </li>
  )
}

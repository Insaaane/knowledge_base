import React from 'react';
import '/src/css/Article.css';
import EditIcon from "/markup/img/edit-icon.svg";

export default function ArticleFormulasItem() {

  return (
    <li className="article__formulas-item">
      <p className="article__formula_nubmer-wrap">
        [<span className="article__formula_nubmer">1</span>]
      </p>
      <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
        className="article__formula_preview"/>
      <p className="article__formula_name">формула для расчета квадрата суммы</p>
        <button className="article__formula_edit-btn">
          <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
        </button>
    </li>
  )
}

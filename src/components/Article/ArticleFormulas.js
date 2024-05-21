import React from 'react';
import '/src/css/Article.css';
import ArticleFormulasItem from './ArticleFormulaItem.js';

export default function ArticleFormulas() {

  return (
    <div className="article__formulas">
      <h2 className="article__formulas_title">Список используемых формул</h2>

      <ul className="article__formulas-list">
            
        <ArticleFormulasItem/>
        <ArticleFormulasItem/>
        <ArticleFormulasItem/>

      </ul>

    </div>
  )
}

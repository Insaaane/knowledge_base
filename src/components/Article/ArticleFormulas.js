import '/src/css/Article.css';
import '/src/css/ArticleEditor.css';
import React, { useState } from 'react';

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

export default function ArticleFormulas({ showButtons, formulas, onAddFormula, onRemoveFormula }) {
  const [isFormulaEditorOpen, setIsFormulaEditorOpen] = useState(false);
  const [currentFormula, setCurrentFormula] = useState(null);

  const handleAddNewFormula = (evt) => {
    evt.preventDefault();
    setCurrentFormula(null); 
    setIsFormulaEditorOpen(true);
  };

  const handleEditFormulaClick = (formula) => {
    setCurrentFormula(formula);   
    setIsFormulaEditorOpen(true);
  };

  const handleCancel = () => {
    setIsFormulaEditorOpen(false);
    setCurrentFormula(null);
  };

  const handleSave = (newFormula) => {
    onAddFormula(newFormula);
    setIsFormulaEditorOpen(false);
    setCurrentFormula(null);
  };

  const handleUpdate = (updatedFormula) => {
    onRemoveFormula(updatedFormula.id);
    onAddFormula(updatedFormula);
    setIsFormulaEditorOpen(false);
  };

  const handleDelete = (formulaId) => {
    onRemoveFormula(formulaId);
    setCurrentFormula(null);
    setIsFormulaEditorOpen(false);
  };

  const handleSelectFormula = (selectedFormula) => {
    onAddFormula(selectedFormula);
  };

  return (
    <div className="article__formulas">
      <h2 className="article__formulas_title">Список используемых формул</h2>

      <ul className="article__formulas-list">
        
        {formulas.map((formula) => (
          <ArticleFormulasItem 
            key={formula.id} 
            formula={formula} 
            showButtons={showButtons} 
            onEdit={handleEditFormulaClick} 
          />
        ))}

      </ul>

      {showButtons &&
        <div className="art-editor__add-formulas-wrap">
          <button 
            className="art-editor__new-formula-btn" 
            style={styles.addIcon} 
            onClick={handleAddNewFormula}>
              добавить новую формулу
          </button>

          <span className="art-editor__or">или</span>

          <ArticleFormulasSelect usedFormulas={formulas} onFormulaSelect={handleSelectFormula}/>
        </div>
      }

      {isFormulaEditorOpen && (
        <FormulaEditor 
          formula={currentFormula} 
          onCancel={handleCancel}
          onSave={handleSave}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
          isArticleEditing={true}
        />
      )}

      
    </div>
  )
}

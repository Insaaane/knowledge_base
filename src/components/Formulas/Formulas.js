import "/src/css/FormulaEditor.css";
import React, { useEffect, useState } from 'react';

import FormulaItem from './FormulaItem.js';
import FormulaEditor from './FormulaEditor.js';

import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "../../Auth/auth.js";

import SearchIcon from "/markup/img/search-icon.svg";
import AddIcon from "/markup/img/add-icon.svg";

const styles = {
  searchIcon: {
    background: `url(${SearchIcon}) no-repeat 6px`
  },
  addIcon: {
    background: `url(${AddIcon}) no-repeat left 6px`
  }
};

export default function Formulas() {
  const [formulas, setFormulas] = useState([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [selectedFormula, setSelectedFormula] = useState(null);

  useEffect(() => {
    fetchWithAuth(URLS.formulas)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFormulas(data))
      .catch(error => console.error('Ошибка при получении формул:', error));
  }, []);

  const handleAddFormula = () => {
    setSelectedFormula(null);
    setIsEditorOpen(true);
  };

  const handleEditFormula = (formula) => {
    setSelectedFormula(formula);
    setIsEditorOpen(true);
  };

  const handleDeleteFormula = (id) => {
    setFormulas(formulas.filter(formula => formula.id !== id));
    setIsEditorOpen(false);
  };
  
  const handleSaveFormula = (newFormula) => {
    setFormulas([...formulas, newFormula]);
    setIsEditorOpen(false);
  };

  const handleUpdateFormula = (updatedFormula) => {
    setFormulas(formulas.map(formula => 
      formula.id === updatedFormula.id ? updatedFormula : formula
    ));
    setIsEditorOpen(false);
  };

  const handleCancel = () => {
    setIsEditorOpen(false);
  };

  if (!formulas.length) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="formula-editor">

      <h1 className="formula-editor__title title">Конструктор формул</h1>

      <h2 className="formula-editor__all-formulas_title">
        Все фомулы (<span className="formula-editor__formulas-count">{formulas.length}</span>)
      </h2>

      <ul className="formula-editor__all-formulas">

        {formulas.map(formula => (
          <FormulaItem 
            key={formula.id} 
            formula={formula} 
            onEdit={handleEditFormula}
          />
        ))}
      
      </ul>

      <button className="art-editor__new-formula-btn" style={styles.addIcon} onClick={handleAddFormula}>
        добавить новую формулу
      </button>   

      {isEditorOpen && 
        <FormulaEditor 
          formula={selectedFormula} 
          onDelete={handleDeleteFormula}
          onCancel={handleCancel}
          onSave={handleSaveFormula}
          onUpdate={handleUpdateFormula}
          isArticleEditing={false}
        />}
    </div>
  )
}

import '/src/css/ArticleEditor.css';
import React, { useState, useEffect } from 'react';

import { URLS } from '../../urls';
import { fetchWithAuth } from "../../Auth/auth.js";

import SelectIcon from "/markup/img/select-btn-icon.svg";

const styles = {
  selectIcon: {
    backgroundImage: `url(${SelectIcon})`
  }
};

export default function ArticleFormulasSelect({ usedFormulas, onFormulaSelect }) {
  const [formulas, setFormulas] = useState([]);
  const [selectedFormula, setSelectedFormula] = useState("");

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

  const handleFormulaChange = (evt) => {
    setSelectedFormula(evt.target.value);
  };

  const handleAddFormula = (evt) => {
    evt.preventDefault();

    const selected = formulas.find(formula => formula.formula === selectedFormula);
    if (selected) {
      onFormulaSelect(selected);
      setSelectedFormula("");
    }
  };

  const filteredFormulas = formulas.filter(formula => !usedFormulas.some(usedFormula => usedFormula.id === formula.id));

  return (
    <>
      <select 
          name="" 
          className="art-editor__select-formula" 
          style={styles.selectIcon}
          value={selectedFormula}
          onChange={handleFormulaChange}
        >
        <option value="" className="art-editor__select-item" defaultValue>добавить имеющуюся формулу</option>

        {filteredFormulas.map(formulaItem => (
          <option key={formulaItem.id} value={formulaItem.formula} id={formulaItem.id} className="art-editor__select-item">{formulaItem.title}</option>
        ))}
        
      </select>
      <button className="art-editor__add-formula-btn" onClick={handleAddFormula}>Добавить</button>
    </>
  )
}

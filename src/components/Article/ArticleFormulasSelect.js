import '/src/css/ArticleEditor.css';
import React, { useState, useEffect } from 'react';

import { URLS } from '../../urls';
import { fetchWithAuth } from "/src/auth.js";

import SelectIcon from "/markup/img/select-btn-icon.svg";

const styles = {
  selectIcon: {
    backgroundImage: `url(${SelectIcon})`
  }
};

export default function ArticleFormulasSelect({  }) {
  const [formulas, setFormulas] = useState([]);

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

  return (
    <select name="" className="art-editor__select-formula" style={styles.selectIcon}>
      <option value="" className="art-editor__select-item" defaultValue>добавить имеющуюся формулу</option>

      {formulas.map(formulaItem => (
        <option key={formulaItem.id} value={formulaItem.formula} id={formulaItem.id} className="art-editor__select-item">{formulaItem.title}</option>
      ))}
      
    </select>
  )
}

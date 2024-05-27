import "/src/css/FormulaEditor.css";
import React, { useState, useEffect } from 'react';

import { URLS } from '/src/urls.js';
import { fetchWithAuth } from '/src/auth.js';

import CheckIcon from "/markup/img/check-icon.svg";

const styles = {
  checkIcon: {
    background: `url(${CheckIcon}) no-repeat right center`
  }
};

export default function FormulaEditor({ formula, onDelete, onCancel, onSave, onUpdate }) {
  const [title, setTitle] = useState(formula ? formula.title : "");
  const [formulaText, setFormulaText] = useState(formula ? formula.formula : "");
  const [formulaImgUrl, setFormulaImgUrl] = useState(`${URLS.formulaImg}${formula ? formula.formula : ""}`);

  useEffect(() => {
    setTitle(formula ? formula.title : "");
    setFormulaText(formula ? formula.formula : "");
    setFormulaImgUrl(`${URLS.formulaImg}${formula ? formula.formula : ""}`);
  }, [formula]);

  useEffect(() => {
    setFormulaImgUrl(`${URLS.formulaImg}${formulaText}`);
  }, [formulaText]);

  const handleInputChange = (evt) => {
    setFormulaText(evt.target.value);
  };

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value);
  };

  const URL = `${URLS.formulas}${formula.id}/`;

  const handleDelete = () => {
    if (!formula || !formula.id) return;

    fetchWithAuth(URL, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      onDelete(formula.id);
    })
    .catch(error => console.error('Ошибка при удалении формулы:', error));
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();

    if (!formula || !formula.id) return;

    const updatedFormula = {
      title,
      formula: formulaText,
    };

    fetchWithAuth(URL, {
      method: 'PUT',
      body: JSON.stringify(updatedFormula),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => onUpdate(data))
    .catch(error => console.error('Ошибка при обновлении формулы:', error));
  };

  const handleSave = (evt) => {
    evt.preventDefault();
    
    const newFormula = {
      title,
      formula: formulaText,
    };

    fetchWithAuth(URLS.formulas, {
      method: 'POST',
      body: JSON.stringify(newFormula),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      onSave(data); 
    })
    .catch(error => {
      console.error('Ошибка при создании формулы:', error);
    });
  };

  return (
  <form className="formula">
      
    <div className="formula__container">
    <input
      className="formula__title"
      placeholder="Название формулы"
      value={title}
      onChange={handleTitleChange}
    />
    <input
      type="text"
      className="formula__text"
      placeholder="Введите формулу..."
      value={formulaText}
      onChange={handleInputChange}
    />

      <h3 className="formula__preview-title">Предпросмотр</h3>
      <img src={formulaImgUrl} alt="Формула"
        className="edit_formula_preview"/>
      
      <div className="formula__variables">
        <p className="formula__variables_item">x - первое слагаемое</p>
        <p className="formula__variables_item">y - второе слагаемое</p>
      </div>

      <div className="formula__buttons_wrap">
        <button type="button" className="formula__cancel-btn" onClick={onCancel}>
            Отмена
        </button>

        <div className='formula__save-bnt_wrap'>
          {formula && (
          <>
            <button type="button" className="formula__delete-btn" onClick={handleDelete}>
              Удалить
            </button>
            <button type="submit" className="formula__save-btn" style={styles.checkIcon} onClick={handleUpdate}>
              Обновить
            </button>
          </>
          )}
          
          {!formula && (
            <button type="submit" className="formula__save-btn" style={styles.checkIcon} onClick={handleSave}>
              Сохранить
            </button>
          )}
        </div>
        
      </div>
    </div>

    <div className="formula__syntax">
      <h3 className="formula__syntax-title">Синтаксис для написания формул:</h3>

      <h4 className="syntax__desc-title">Корень</h4>

      <div className="formula__syntax_description">
        
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\sqrt{x}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\sqrt{"{x}"}</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\sqrt{x}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\sqrt{"{x}"}</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\sqrt{x}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\sqrt{"{x}"}</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\sqrt{x}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\sqrt{"{x}"}</span>
          </div>
        </div>

      </div>

      <h4 className="syntax__desc-title">Степень</h4>

      <div className="formula__syntax_description">
        
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\sqrt{x}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\sqrt{"{x}"}</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\sqrt{x}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\sqrt{"{x}"}</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\sqrt{x}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\sqrt{"{x}"}</span>
          </div>
        </div>

      </div>

    </div>

  </form>
  )
}

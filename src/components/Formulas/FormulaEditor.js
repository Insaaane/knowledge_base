import "/src/css/FormulaEditor.css";
import React, { useState, useEffect } from 'react';

import { URLS } from '/src/urls.js';
import { fetchWithAuth } from '../../Auth/auth.js';

import CheckIcon from "/markup/img/check-icon.svg";

const styles = {
  checkIcon: {
    background: `url(${CheckIcon}) no-repeat right center`
  }
};

export default function FormulaEditor({ formula, onDelete, onCancel, onSave, onUpdate, isArticleEditing }) {
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

  const handleDelete = () => {
    if (!formula || !formula.id) return;

    if (isArticleEditing) {
      onDelete(formula.id);
    } else {
      const URL = `${URLS.formulas}${formula.id}/`;
      
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
    }
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();

    if (!formula || !formula.id) return;

    const URL = `${URLS.formulas}${formula.id}/`;
  
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
    <form className="formula" onSubmit={formula ? handleUpdate : handleSave}>
      
    <div className="formula__container">
      <input
        required
        className="formula__title"
        placeholder="*Введите название формулы*"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        required
        type="text"
        className="formula__text"
        placeholder="Введите формулу..."
        value={formulaText}
        onChange={handleInputChange}
      />

      <h3 className="formula__preview-title">Предпросмотр</h3>
      <img src={formulaImgUrl} alt="Формула" className="edit_formula_preview" />
      
      {/* <div className="formula__variables">
        <p className="formula__variables_item">x - первое слагаемое</p>
        <p className="formula__variables_item">y - второе слагаемое</p>
      </div> */}

      <div className="formula__buttons_wrap">
        <button type="button" className="formula__cancel-btn" onClick={onCancel}>
          Отмена
        </button>

        <div className='formula__save-btn_wrap'>
          {formula && (
            <>
              <button type="button" className="formula__delete-btn" onClick={handleDelete}>
                Удалить
              </button>
              <button type="submit" className="formula__save-btn" style={styles.checkIcon}>
                Обновить
              </button>
            </>
          )}

          {!formula && (
            <button type="submit" className="formula__save-btn" style={styles.checkIcon}>
              Сохранить
            </button>
          )}
        </div>
      </div>

      <div className="formula__syntax_small">
        <div className="formula__syntax_small-wrap">
          <div>
            <h4 className="syntax__desc-title">Градусы (символ)</h4>

            <div className="formula__syntax_description">
              
              <div className="syntax__desc-item">
                <div className="syntax__item-wrap">
                  <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\degree" alt="Описание ввода"/>
                  <span className="syntax__desc-text">\degree</span>
                </div>
              </div>
              <div className="syntax__desc-item">
                <div className="syntax__item-wrap">
                  <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;15\degree" alt="Описание ввода"/>
                  <span className="syntax__desc-text">15\degree</span>
                </div>
              </div>

            </div>
          </div>

          <div>
            <h4 className="syntax__desc-title">Число Пи</h4>

            <div className="formula__syntax_description">
              
              <div className="syntax__desc-item">
                <div className="syntax__item-wrap">
                  <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\pi" alt="Описание ввода"/>
                  <span className="syntax__desc-text">\pi</span>
                </div>
              </div>
              <div className="syntax__desc-item">
                <div className="syntax__item-wrap">
                  <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\Pi" alt="Описание ввода"/>
                  <span className="syntax__desc-text">\Pi</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="formula__syntax_small-wrap">
          <div>
            <h4 className="syntax__desc-title">Угол</h4>

            <div className="formula__syntax_description">
              
              <div className="syntax__desc-item">
                <div className="syntax__item-wrap">
                  <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\angle" alt="Описание ввода"/>
                  <span className="syntax__desc-text">\angle</span>
                </div>
              </div>
              <div className="syntax__desc-item">
                <div className="syntax__item-wrap">
                  <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\angle \alpha" alt="Описание ввода"/>
                  <span className="syntax__desc-text">\angle \alpha</span>
                </div>
              </div>

            </div>
          </div>
          <div>
            <h4 className="syntax__desc-title">Сумма</h4>

            <div className="formula__syntax_description">
              
              <div className="syntax__desc-item">
                <div className="syntax__item-wrap">
                  <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\sum_{i=0}^{N}a_i" alt="Описание ввода"/>
                  <span className="syntax__desc-text">\sum_{"{i=0}^{N}"}a_i</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        

        <h4 className="syntax__desc-title">Альфа, бета</h4>

        <div className="formula__syntax_description">
          
          <div className="syntax__desc-item">
            <div className="syntax__item-wrap">
              <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\alpha" alt="Описание ввода"/>
              <span className="syntax__desc-text">\alpha</span>
            </div>
          </div>
          <div className="syntax__desc-item">
            <div className="syntax__item-wrap">
              <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\beta" alt="Описание ввода"/>
              <span className="syntax__desc-text">\beta</span>
            </div>
          </div>
          <div className="syntax__desc-item">
            <div className="syntax__item-wrap">
              <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\gamma" alt="Описание ввода"/>
              <span className="syntax__desc-text">\gamma</span>
            </div>
          </div>

        </div>

        <h4 className="syntax__desc-title">Цвет</h4>

        <div className="formula__syntax_description">
          
          <div className="syntax__desc-item">
            <div className="syntax__item-wrap">
              <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\color{blue}AaBb123" alt="Описание ввода"/>
              <span className="syntax__desc-text">\color{"{blue}"}AaBb123</span>
            </div>
          </div>
          <div className="syntax__desc-item">
            <div className="syntax__item-wrap">
              <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\colorbox{red}{Black on red}" alt="Описание ввода"/>
              <span className="syntax__desc-text">\colorbox{"{red}{Black on red}"}</span>
            </div>
          </div>

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
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\sqrt[3]{x}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\sqrt[3]{"{x}"}</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\surd{24}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\surd{"{24}"}</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\sqrt{\dfrac{3}{4}}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\sqrt{"{\dfrac{3}{4}}"}</span>
          </div>
        </div>

      </div>

      <h4 className="syntax__desc-title">Степень</h4>

      <div className="formula__syntax_description">
        
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;x^2" alt="Описание ввода"/>
            <span className="syntax__desc-text">x^2</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;10^4" alt="Описание ввода"/>
            <span className="syntax__desc-text">10^4</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;10^{24}" alt="Описание ввода"/>
            <span className="syntax__desc-text">10^{"{24}"}</span>
          </div>
        </div>

      </div>

      <h4 className="syntax__desc-title">Дроби</h4>

      <div className="formula__syntax_description">
        
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\dfrac{3}{4}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\dfrac{"{3}{4}"}</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\dfrac{a + b}{2}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\dfrac{"{a + b}{2}"}</span>
          </div>
        </div>

      </div>

      <h4 className="syntax__desc-title">Подстрочные символы</h4>

      <div className="formula__syntax_description">
        
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;x_i" alt="Описание ввода"/>
            <span className="syntax__desc-text">x_i</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;x_a" alt="Описание ввода"/>
            <span className="syntax__desc-text">x_a</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;x_{ab}" alt="Описание ввода"/>
            <span className="syntax__desc-text">x_{"{ab}"}</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;S_\text{all}" alt="Описание ввода"/>
            <span className="syntax__desc-text">S_\text{"{all}"}</span>
          </div>
        </div>

      </div>

      <h4 className="syntax__desc-title">Умножение (точка)</h4>

      <div className="formula__syntax_description">
        
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\cdot" alt="Описание ввода"/>
            <span className="syntax__desc-text">\cdot</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;a \cdot b" alt="Описание ввода"/>
            <span className="syntax__desc-text">a \cdot b</span>
          </div>
        </div>

      </div>

      <h4 className="syntax__desc-title">Скобка снизу</h4>

      <div className="formula__syntax_description">
        
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;n^x=\underbrace{n\cdot n \cdot ...\cdot n}_{x\text{ times}}" alt="Описание ввода"/>
            <span className="syntax__desc-text">n^x=\underbrace{"{n\\cdot n \\cdot ...\\cdot n}_{x\\text{ times}}"}</span>
          </div>
        </div>
        <div className="syntax__desc-item">
          <div className="syntax__item-wrap">
            <img className="syntax__img" src="https://latex.codecogs.com/svg.image?\LARGE&space;\underbrace{x+...+x}_{n\text{ times}}" alt="Описание ввода"/>
            <span className="syntax__desc-text">\underbrace{"{x+...+x}_{n\\text{ times}}"}</span>
          </div>
        </div>

      </div>

    </div>

  </form>
  )
}

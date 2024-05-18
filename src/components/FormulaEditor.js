import React from 'react';
import "../css/FormulaEditor.css";
import EditIcon from "/markup/img/edit-icon.svg";
import CheckIcon from "/markup/img/check-icon.svg";
import SearchIcon from "/markup/img/search-icon.svg";
import AddIcon from "/markup/img/add-icon.svg";

const styles = {
  checkIcon: {
    background: `url(${CheckIcon}) no-repeat right center`
  },
  searchIcon: {
    background: `url(${SearchIcon}) no-repeat 6px`
  },
  addIcon: {
    background: `url(${AddIcon}) no-repeat left 6px`
  }
}

export default function FormulaEditor() {
  return (
    <div className="formula-editor">

      <h1 className="formula-editor__title title">Конструктор формул</h1>

      <input className="main__search formulas__search" type="text" style={styles.searchIcon} placeholder="Поиск"/>

      <h2 className="formula-editor__all-formulas_title">
        Все фомулы (<span className="formula-editor__formulas-count">121</span>)
      </h2>

      <ul className="formula-editor__all-formulas">

        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        <li className="formulas-item">
          <span className="formula-editor__formula-name">Квадрат суммы</span>
          <div className="formulas__formula-wrap">
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="formula_preview"/>
            <button className="edit-formula-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </div>
        </li>
        

      </ul>

      <button className="art-editor__new-formula-btn" style={styles.addIcon}>добавить новую формулу</button>

      <form className="formula">
        
        <div className="formula__container">
          <input className="formula__title" placeholder="Название формулы"/>
          <input type="text" className="formula__text" placeholder="Введите формулу..."/>

          <h3 className="formula__preview-title">Предпросмотр</h3>
          <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
            className="edit_formula_preview"/>
          
          <div className="formula__variables">
            <p className="formula__variables_item">x - первое слагаемое</p>
            <p className="formula__variables_item">y - второе слагаемое</p>
          </div>

          <div className="formula__save-btn_wrap">
            <button type="submit" className="formula__save-btn" style={styles.checkIcon}>Сохранить</button>
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
      
    </div>
  )
}

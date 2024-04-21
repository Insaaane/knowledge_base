import "../css/Main.css";
import React from "react";
import Card1 from "/Users/daybo/Desktop/knowledge_base/markup/img/regulatory-docs-img.png";
import Card2 from "/Users/daybo/Desktop/knowledge_base/markup/img/staff-info-img.png";
import Card3 from "/Users/daybo/Desktop/knowledge_base/markup/img/accounting-img.png";
import Card4 from "/Users/daybo/Desktop/knowledge_base/markup/img/projects-img.png";
import Card5 from "/Users/daybo/Desktop/knowledge_base/markup/img/commerce-docs-img.png";
import Card6 from "/Users/daybo/Desktop/knowledge_base/markup/img/organization-docs-img.png";
import SearchIcon from "/Users/daybo/Desktop/knowledge_base/markup/img/search-icon.svg";
import DeleteIcon from "/Users/daybo/Desktop/knowledge_base/markup/img/delete-icon.svg";

const styles = {
  searchIcon: {
    background: `url(${SearchIcon}) no-repeat 8px`
  },
  deleteIcon: {
    background: `url(${DeleteIcon}) no-repeat left top 2px`
  }
}

function Main() {
  return (
  <div className="main">
    <h1 className="main__title title">Документы</h1>
    <input className="main__search" type="text" placeholder="Поиск" style={styles.searchIcon}/>

    <div className="main__cards">
      <div className="main__card">
        <img className="main__card-img" src={Card1} alt="Нормативные документы"/>
        <h2 className="main__card-title">Нормативные документы</h2>
      </div>

      <div className="main__card">
        <img className="main__card-img" src={Card2} alt="Информация о сотрудниках"/>
        <h2 className="main__card-title">Информация о сотрудниках</h2>
      </div>
      
      <div className="main__card">
        <img className="main__card-img" src={Card3} alt="Бухгалтерия"/>
        <h2 className="main__card-title">Бухгалтерия</h2>
      </div>

      <div className="main__card">
        <img className="main__card-img" src={Card4} alt="Проектная деятельность"/>
        <h2 className="main__card-title">Проектная деятельность</h2>
      </div>

      <div className="main__card">
        <img className="main__card-img" src={Card5} alt="Коммерческие документы"/>
        <h2 className="main__card-title">Коммерческие документы</h2>
      </div>
      
      <div className="main__card">
        <img className="main__card-img" src={Card6} alt="Организационно-правовые документы"/>
        <h2 className="main__card-title">Организационно-правовые документы</h2>
      </div>

    </div>

    <div className="main__deleted-wrap">
      <button className="main__deleted">
        <span className="main__deleted-icon" style={styles.deleteIcon}>Удаленные документы</span>
      </button>
    </div>
  </div>
  );
}

export default Main;

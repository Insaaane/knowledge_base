import "../css/Documents.css";
import React from "react";
// import Card1 from "/Users/daybo/Desktop/knowledge_base/markup/img/regulatory-docs-img.png";
import Card1 from "/markup/img/regulatory-docs-img.png";
import Card2 from "/markup/img/staff-info-img.png";
import Card3 from "/markup/img/accounting-img.png";
import Card4 from "/markup/img/projects-img.png";
import Card5 from "/markup/img/commerce-docs-img.png";
import Card6 from "/markup/img/organization-docs-img.png";
import SearchIcon from "/markup/img/search-icon.svg";
import DeleteIcon from "/markup/img/delete-icon.svg";
import { Link } from "react-router-dom";

const styles = {
  searchIcon: {
    background: `url(${SearchIcon}) no-repeat 8px`
  },
  deleteIcon: {
    background: `url(${DeleteIcon}) no-repeat left top 2px`
  }
}

export default function Main() {
  return (
  <div className="main">
    <h1 className="main__title title">Документы</h1>
    <input className="main__search" type="text" placeholder="Поиск" style={styles.searchIcon}/>

    <div className="main__cards">
      <Link to='/articles-list' className="main__card">
        <img className="main__card-img" src={Card1} alt="Нормативные документы"/>
        <h2 className="main__card-title">Нормативные документы</h2>
      </Link>

      <Link to='/articles-list' className="main__card">
        <img className="main__card-img" src={Card2} alt="Информация о сотрудниках"/>
        <h2 className="main__card-title">Информация о сотрудниках</h2>
      </Link>
      
      <Link to='/articles-list' className="main__card">
        <img className="main__card-img" src={Card3} alt="Бухгалтерия"/>
        <h2 className="main__card-title">Бухгалтерия</h2>
      </Link>

      <Link to='/articles-list' className="main__card">
        <img className="main__card-img" src={Card4} alt="Проектная деятельность"/>
        <h2 className="main__card-title">Проектная деятельность</h2>
      </Link>

      <Link to='/articles-list' className="main__card">
        <img className="main__card-img" src={Card5} alt="Коммерческие документы"/>
        <h2 className="main__card-title">Коммерческие документы</h2>
      </Link>
      
      <Link to='/articles-list' className="main__card">
        <img className="main__card-img" src={Card6} alt="Организационно-правовые документы"/>
        <h2 className="main__card-title">Организационно-правовые документы</h2>
      </Link>

    </div>

    <div className="main__deleted-wrap">
      <button className="main__deleted">
        <Link to='/archive' className="main__deleted-icon" style={styles.deleteIcon}>Удаленные документы</Link>
      </button>
    </div>
  </div>
  );
}
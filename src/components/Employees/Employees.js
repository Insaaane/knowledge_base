import '/src/css/ArticlesList.css';
import React, { useState, useEffect } from 'react';

import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "../../Auth/auth.js";

import EmployeesItem from './EmployeesItem.js';

import AddIcon from "/markup/img/add-icon.svg";

const styles = {
  addIcon: {
    background: `url(${AddIcon}) no-repeat left 6px`
  }
};

export default function Employees() {
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    fetchWithAuth(URLS.employees)
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Ошибка при получении сотрудников:', error));
  }, []);

  if (!employees) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="art-list">

      <h1 className="art-list__title title">Сотрудники предприятия</h1>

      <a href={URLS.newEmployee} target="_blank">
        <button className="art-list__add-article-btn" style={styles.addIcon}>добавить сотрудника</button>
      </a>

      <ul className="art-list__list">

        {employees.map(employee => (
          <EmployeesItem 
            key={employee.id}
            employee={employee}
          />
        ))}

      </ul>

    </div>
  )
}

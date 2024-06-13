import '/src/css/ArticlesList.css';
import React from 'react';

import Avatar from "/markup/img/avatar-circle.png";

export default function EmployeesItem({ employee }) {
  return (
    <div className='employees-item'>
      <img src={Avatar} className='employees-item__avatar'/>
      <div className='employees-item__info'>
        <p className='employees-item__name'>{`${employee.last_name} ${employee.first_name} ${employee.patronymic}`}</p>
        <p className='employees-item__post'>
          <b>Должность: </b>{employee.work_pos}
        </p>
      </div>
    </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';

import '../css/SideMenu.css';
import SideLogo from "/markup/img/logo-sidenav.svg";
import AccountIcon from "/markup/img/account-icon.svg";

export default function SideMenu() {
  return (
  <div className="sidenav">
		<img className="sidenav__logo" src={SideLogo} alt="Логотип базы знаний 'IKnow'"/>

		<ul className="sidenav__menu">
			<li className="sidenav__menu-item">
				<Link to='/documents'>Главная</Link>
			</li>
			<li className="sidenav__menu-item">
				<Link to='/'>Конструктор моделей</Link>
			</li>
			<li className="sidenav__menu-item">
				<Link to='/formulas'>Конструктор формул</Link>
			</li>
		</ul>

		<div className="sidenav__account">
			<img className="sidenav__account-icon" src={AccountIcon} alt="Вход в аккаунт"/>
			<div className="sidenav__account-btn_wrap">
				<Link to='/'>Войти в систему</Link>
			</div>
		</div>
	</div>
  );
}

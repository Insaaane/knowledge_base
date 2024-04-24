import React from 'react';
import '../css/SideMenu.css';
import SideLogo from "/Users/daybo/Desktop/knowledge_base/markup/img/logo-sidenav.svg";
import AccountIcon from "/Users/daybo/Desktop/knowledge_base/markup/img/account-icon.svg";

export default function SideMenu() {
  return (
  <div className="sidenav">
		<img className="sidenav__logo" src={SideLogo} alt="Логотип базы знаний 'IKnow'"/>

		<ul className="sidenav__menu">
			<li className="sidenav__menu-item">
				<a href="#" className="sidenav__link">Главная</a>
			</li>
			<li className="sidenav__menu-item">
				<a href="#" className="sidenav__link">Конструктор моделей</a>
			</li>
			<li className="sidenav__menu-item">
				<a href="#" className="sidenav__link">Конструктор формул</a>
			</li>
		</ul>

		<div className="sidenav__account">
			<img className="sidenav__account-icon" src={AccountIcon} alt="Вход в аккаунт"/>
			<div className="sidenav__account-btn_wrap">
				<a href="#" className="sidenav__account-btn">Войти в систему</a>
			</div>
		</div>
	</div>
  );
}

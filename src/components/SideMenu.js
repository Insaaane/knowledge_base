import '../css/SideMenu.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SideLogo from "/markup/img/logo-sidenav.svg";
import AccountIcon from "/markup/img/account-icon.svg";
import ExitIcon from "/markup/img/exit-icon.svg";
import { useAuth } from '../Auth/AuthContext.js';

export default function SideMenu() {
	const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

	return (
		<div className="sidenav">
			<img className="sidenav__logo" src={SideLogo} alt="Логотип базы знаний 'IKnow'" />

			<ul className="sidenav__menu">
				<li className="sidenav__menu-item">
					<Link to='/documents'>Главная</Link>
				</li>
				<li className="sidenav__menu-item">
					<Link to='/formulas'>Конструктор формул</Link>
				</li>
			</ul>

			{isLoggedIn ? (
				<div className="sidenav__account" onClick={handleLogout}>
					<img className="sidenav__account-icon" src={ExitIcon} alt="Выйти из системы" />
					<p className="sidenav__account-btn_wrap">Выйти из системы</p>
				</div>
			) : (
				<Link to='/' className="sidenav__account">
					<img className="sidenav__account-icon" src={AccountIcon} alt="Войти в систему" />
					<p className="sidenav__account-btn_wrap">Войти в систему</p>
				</Link>
			)}

		</div>
	);
}

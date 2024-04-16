import "../css/Entry.css";
import React from "react";
import fullLogo from "../img/full-logo.svg"

function Login() {
  return (
  <div className="entry">
    <img className="entry__logo" src="./img/full-logo.svg" alt="Логотип базы знаний 'IKnow'"/>

    <form className="entry__login-form" action={fullLogo} method="post">
      <input className="entry__login-input" type="text" id="username" name="username" placeholder="Введите email" autoComplete="off"/>
      <input className="entry__login-input" type="password" id="password" name="password" placeholder="Введите пароль"/>
      <button className="entry__login-btn" type="submit">Войти</button>
    </form>
  </div>
  );
}

export default Login;

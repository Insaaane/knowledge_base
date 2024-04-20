import "../css/Entry.css";
import React from "react";
import fullLogo from "/Users/daybo/Desktop/knowledge_base/markup/img/full-logo.svg"

function Login() {
  return (
  <div className="entry">
    <img className="entry__logo" src={fullLogo} alt="Логотип базы знаний 'IKnow'"/>

    <form className="entry__login-form" action="http://127.0.0.1:8000/login/" method="post">
      <input className="entry__login-input" type="text" id="username" name="username" placeholder="Введите email" autoComplete="off"/>
      <input className="entry__login-input" type="password" id="password" name="password" placeholder="Введите пароль"/>
      <button className="entry__login-btn" type="submit">Войти</button>
    </form>
  </div>
  );
}

export default Login;

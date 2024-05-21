import "../css/Entry.css";
import React, {useState} from "react";
import { useNavigate } from "react-router";
import fullLogo from "/markup/img/full-logo.svg";
import { URLS } from "../urls.js";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(URLS.login, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка авторизации");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);

        navigate('/documents');
      })
      .catch(error => console.error("Error login:", error));
  };

  return (
  <div className="entry__wrapper">
    <div className="entry">
      <img className="entry__logo" src={fullLogo} alt="Логотип базы знаний 'IKnow'"/>

      <form className="entry__login-form" onSubmit={handleSubmit}>
        <input className="entry__login-input" 
          type="text" id="username" 
          name="username" 
          placeholder="Введите email" 
          autoComplete="off"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        />
        <input className="entry__login-input" 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="entry__login-btn" type="submit">Войти</button>
      </form>
    </div>
  </div>
  );
}

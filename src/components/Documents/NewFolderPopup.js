import "/src/css/Documents.css";
import React, { useState } from "react";

import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "/src/auth.js";

import PopupBG from "/markup/img/popup-bg.png";
import CloseIcon from "/markup/img/close-icon.svg";

const styles = {
  popupBG: {
    backgroundImage: `url(${PopupBG})`
  }
};

export default function NewFolderPopup({ isVisible, onClose, onAddFolder }) {

  const [title, setTitle] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newFolder = { title };

    fetchWithAuth(URLS.folders, {
      method: 'POST',
      body: JSON.stringify(newFolder)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(createdFolder => {
      onAddFolder(createdFolder);
      onClose();
    })
    .catch(error => console.error('Ошибка создания папки:', error));
  };

  if (!isVisible) return null;

  return (
  <div className="new-folder__popup popup" >
    <div className="new-folder__content" style={styles.popupBG}>
      <img src={CloseIcon} alt="Закрыть" className="new-folder__close" onClick={onClose}/>
      <h3 className="new-folder__title">Создание новой категории</h3>

			<form className="new-folder__form" onSubmit={handleSubmit}>
				<div className="new-folder__input-wrap">
					<p className="new-folder__label">Название категории</p>
					<input 
            type="text" 
            className="new-folder__input" 
            placeholder="Введите название категории"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />
				</div>
				

				<div className="new-folder__buttons-wrap">
					<button className="new-folder__btn reset" onClick={onClose}>Отмена</button>
					<button type="submit" className="new-folder__btn save">Сохранить</button>
				</div>
			</form>
    </div>
  </div>
  );
}

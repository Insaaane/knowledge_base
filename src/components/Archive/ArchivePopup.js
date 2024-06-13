import "/src/css/Documents.css";
import React, { useState, useEffect } from "react";

import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "../../Auth/auth.js";
import RestoreArticleSelect from "./RestoreArticleSelect.js";

import PopupBG from "/markup/img/popup-bg.png";
import CloseIcon from "/markup/img/close-icon.svg";

const styles = {
  popupBG: {
    backgroundImage: `url(${PopupBG})`
  }
};

export default function ArchivePopup({ articleID, onClose, onRestoreSuccess }) {
  const [folders, setFolders] = useState([]);
  const [selectedFolderID, setSelectedFolderID] = useState("");

  useEffect(() => {
    fetchWithAuth(URLS.folders)
      .then(response => response.json())
      .then(data => setFolders(data))
      .catch(error => console.error('Ошибка получения папок:', error));
  }, []);

  const handleRestore = (e) => {
    e.preventDefault();
    const url = `${URLS.restore}${articleID}/`;
    const body = { folderID: selectedFolderID };

    fetchWithAuth(url, {
      method: 'POST',
      body: JSON.stringify(body),
    })
    .then(response => {
      if (!response.ok) {
        if (response.status === 403) {
          alert('У вас нет доступа к этой статье.'); 
        } else {
          throw new Error('Network response was not ok');
        }
      } else {
        onRestoreSuccess();
      }
    })
    .catch(error => console.error('Error restoring article: ', error));
  };

  return (
  <div className="new-folder__popup popup" >
    <div className="new-folder__content" style={styles.popupBG}>
      <img src={CloseIcon} alt="Закрыть" className="new-folder__close" onClick={onClose}/>
      <h3 className="new-folder__title">Восстановление статьи</h3>

			<form className="new-folder__form"  onSubmit={handleRestore}>
				<div className="new-folder__input-wrap">
					<p className="new-folder__label">Выберите папку для восстановления</p>

          <RestoreArticleSelect 
            folders={folders} 
            selectedFolderID={selectedFolderID}
            setSelectedFolderID={setSelectedFolderID}
          />

				</div>
				

				<div className="new-folder__buttons-wrap">
					<button className="new-folder__btn reset" onClick={onClose}>Отмена</button>
					<button type="submit" className="new-folder__btn save">Восстановить</button>
				</div>
			</form>
    </div>
  </div>
  );
}

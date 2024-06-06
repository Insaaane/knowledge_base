import "/src/css/Documents.css";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "../../Auth/auth.js";

import Folder from "./Folder.js";
import NewFolderPopup from "./NewFolderPopup.js";

import SearchIcon from "/markup/img/search-icon.svg";
import DeleteIcon from "/markup/img/archive-icon.svg";
import NewFolderImg from "/markup/img/new-folder-img.png";

const styles = {
  searchIcon: {
    background: `url(${SearchIcon}) no-repeat 8px`
  },
  deleteIcon: {
    background: `url(${DeleteIcon}) no-repeat left top 2px`
  }
};

export default function Documents() {
  const [folders, setFolders] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    fetchWithAuth(URLS.folders)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFolders(data))
      .catch(error => console.error('Ошибка получения папок:', error));
  }, []);

  const handleDeleteFolder = (folderId) => {
    setFolders(folders.filter(folder => folder.id !== folderId));
  };

  const handleAddFolder = (newFolder) => {
    setFolders([...folders, newFolder]);
  };

  const handleShowPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
  <div className="main">
    <h1 className="main__title title">Документы</h1>
    <input className="main__search" type="text" placeholder="Поиск" style={styles.searchIcon} />

    <div className="main__cards">
      {folders.map(folder => (
        <Folder key={folder.id} folder={folder} onDelete={handleDeleteFolder}/>
      ))}

      <div className="main__card" onClick={handleShowPopup}>
        <img className="main__card-img" src={NewFolderImg} alt="Добавить папку"/>
        <h2 className="main__card-title">Новая категория документов</h2>
      </div>
    </div>

    <div className="main__deleted-wrap">
      <Link to='/archive' className="main__deleted">
        <p className="main__deleted-icon" style={styles.deleteIcon}>Удаленные документы</p>
      </Link>
    </div>

    <NewFolderPopup 
      isVisible={isPopupVisible} 
      onClose={handleClosePopup} 
      onAddFolder={handleAddFolder} 
    />

  </div>
  );
}

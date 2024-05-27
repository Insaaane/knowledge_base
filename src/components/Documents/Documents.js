import "/src/css/Documents.css";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "/src/auth.js";

import Folder from "./Folder.js";

import SearchIcon from "/markup/img/search-icon.svg";
import DeleteIcon from "/markup/img/archive-icon.svg";

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

  const handleDelete = (folderId) => {
    setFolders(folders.filter(folder => folder.id !== folderId));
  };

  return (
  <div className="main">
    <h1 className="main__title title">Документы</h1>
    <input className="main__search" type="text" placeholder="Поиск" style={styles.searchIcon} />

    <div className="main__cards">
      {folders.map(folder => (
        <Folder key={folder.id} folder={folder} onDelete={handleDelete}/>
      ))}
    </div>

    <div className="main__deleted-wrap">
      <Link to='/archive' className="main__deleted">
        <p className="main__deleted-icon" style={styles.deleteIcon}>Удаленные документы</p>
      </Link>
    </div>
  </div>
  );
}

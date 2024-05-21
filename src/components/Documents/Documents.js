import "/src/css/Documents.css";
import React, { useEffect, useState } from "react";
import SearchIcon from "/markup/img/search-icon.svg";
import DeleteIcon from "/markup/img/archive-icon.svg";
import { Link } from "react-router-dom";
import Folder from "./Folder.js";
import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "/src/auth.js";

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
          throw new Error('Ошибка');
        }
        return response.json();
      })
      .then(data => setFolders(data))
      .catch(error => console.error("Error fetching folders:", error));
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
      <button className="main__deleted">
        <Link to='/archive' className="main__deleted-icon" style={styles.deleteIcon}>Удаленные документы</Link>
      </button>
    </div>
  </div>
  );
}

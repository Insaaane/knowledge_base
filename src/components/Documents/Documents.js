import "/src/css/Documents.css";
import React, { useEffect, useState, useMemo } from "react";

import { Link } from "react-router-dom";
import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "../../Auth/auth.js";

import Folder from "./Folder.js";
import NewFolderPopup from "./NewFolderPopup.js";
import ArticleItem from "../ArticlesList/ArticleItem.js";

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

  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

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

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchWithAuth(`${URLS.search}${searchQuery}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data);
        setIsSearching(true);
      })
      .catch(error => console.error('Ошибка поиска:', error));
  };

  const handleResetSearch = () => {
    setSearchQuery("");
    setArticles([]);
    setIsSearching(false);
  };

  const memoizedFolders = useMemo(() => {
    return (
    <>
      {folders.map(folder => (
        <Folder key={folder.id} folder={folder} onDelete={handleDeleteFolder}/>
      ))}

      <div className="main__card" onClick={handleShowPopup}>
        <img className="main__card-img" src={NewFolderImg} alt="Добавить папку"/>
        <h2 className="main__card-title">Новая категория документов</h2>
      </div>
    </>
    );
  }, [folders]);

  const memoizedArticles = useMemo(() => {
    return articles.map(article => (
      <ArticleItem key={article.id} article={article} />
    ));
  }, [articles]);

  if (!folders.length && !isSearching) {
    return <div className="loading">Loading...</div>;
  }

  return (
  <div className="main">
    <h1 className="main__title title">Документы</h1>
    <form onSubmit={handleSearchSubmit}> 
      <input
        className="main__search"
        type="text"
        placeholder="Поиск"
        style={styles.searchIcon}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        required
      />
      <button type="submit" className="main__search-btn search">Найти</button>
      <button type="reset" className="main__search-btn" onClick={handleResetSearch}>Отменить поиск</button>
    </form>

    <div className="main__cards">
        
      {isSearching ? memoizedArticles : memoizedFolders}
  
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

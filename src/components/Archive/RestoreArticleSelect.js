import React from 'react';
import '/src/css/ArticleEditor.css';
import SelectIcon from "/markup/img/select-btn-icon.svg";

const styles = {
  selectIcon: {
    backgroundImage: `url(${SelectIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top 18px right 10px'
  }
};

export default function RestoreArticleSelect({ folders, selectedFolderID, setSelectedFolderID }) {
  const handleChange = (e) => {
    setSelectedFolderID(e.target.value);
  };
  
  return (
    <select 
      required
      className="new-folder__input" 
      style={styles.selectIcon}
      value={selectedFolderID}
      onChange={handleChange}
    >
      <option value="" className="art-editor__select-item" defaultValue hidden>Выберите папку</option>

      {folders.map(folder => (
        <option key={folder.id} value={folder.id} id={folder.id} className="art-editor__select-item">{folder.title}</option>
      ))}
      
    </select>
  )
}

import '../css/ArticleEditor.css';
import React from 'react';

import ArticleFormulas from './Article/ArticleFormulas.js';

import FileIcon from "/markup/img/file-icon.svg";
import AddIcon from "/markup/img/add-icon.svg";
import SelectIcon from "/markup/img/select-btn-icon.svg";

const styles = {
  fileIcon: {
    background: `url(${FileIcon}) no-repeat right center`
  },
  addIcon: {
    background: `url(${AddIcon}) no-repeat left 6px`
  },
  selectIcon: {
    backgroundImage: `url(${SelectIcon})`
  }
};

export default function ArticleEditor() {
  return (
    <form className="art-editor" action="" method="post" encType="multipart/form-data">

      <div className="art-editor__article">
        <textarea name="" id="" rows="1" className="art-editor__title-input" placeholder="Название статьи"></textarea>

        <label htmlFor="article-text" className="art-editor__article-label">Текст статьи</label>
  
        <textarea name="" id="article-text" className="art-editor__text-input" placeholder="Начните писать вашу статью тут..."></textarea>    

        <p className="art-editor__document">
          Документ:  
          <label htmlFor="input-doc" className="art-editor__doc-label" style={styles.fileIcon}> прикрепить ссылку на документ</label>
          <input className="art-editor__add-file" id="input-doc" type="file" hidden/>
        </p>
        
      </div>
      
      <ArticleFormulas showButtons={true}/>

    </form>
  )
}

import React, { useEffect, useState } from 'react';
import '/src/css/Article.css';
import VersionsIcon from "/markup/img/versions-icon.svg";
import AddFormulaIcon from "/markup/img/add-icon.svg";
import EditIcon from "/markup/img/edit-icon.svg";
import DeleteIcon from "/markup/img/delete-icon.svg";
import SendMessageIcon from "/markup/img/send-message-icon.svg";
import { Link, useParams, useNavigate } from 'react-router-dom';
import ArticleFormulas from './ArticleFormulas.js';
import Comments from './Comments.js';
import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "/src/auth.js";
import { formatDate } from '/src/util.js';

const styles = {
  versionsIcon: {
    background: `url(${VersionsIcon}) no-repeat left center`
  },
  addFormulaIcon: {
    background: `url(${AddFormulaIcon}) no-repeat left 10px`
  },
  sendMessageIcon: {
    background: `url(${SendMessageIcon}) no-repeat right center`
  },
  editIcon: {
    background: `url(${EditIcon}) no-repeat left center`
  },
  deleteIcon: {
    background: `url(${DeleteIcon}) no-repeat left center`
  }
};

export default function Article() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [article, setArticle] = useState(null);

  const url = `${URLS.articles}${id}/`

  useEffect(() => {
    fetchWithAuth(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка');
        }
        return response.json();
      })
      .then(data => setArticle(data))
      .catch(error => console.error("Error fetching article:", error));
  }, []);

  const handleDelete = () => {
    fetchWithAuth(url, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка удаления статьи');
      }
      navigate(-1);
    })
    .catch(error => console.error("Error deleting article:", error));
  };

  if (!article) {
    return <div></div>;
  }

  return (
    <div className="article">
      <h1 className="article__title title">{article.title}</h1>

      <div className="article__info_wrap">
        <div className="article__info">
          <p className="article__info_label">Автор: <span className="article__label_text">{article.author}</span></p>
          <p className="article__info_label">Дата: <span className="article__label_text">{formatDate(article.creation_date)}</span></p>
        </div>

        <div className='article__options'>
          <Link to='/versions' className="article__versions-btn" style={styles.versionsIcon}>история версий</Link>
          <Link to='/article-editor' className="article__versions-btn" style={styles.editIcon}>редактировать статью</Link>
          <button className="article__versions-btn" style={styles.deleteIcon} onClick={handleDelete}>удалить статью</button>
        </div>
      </div>

      <p className="article__text">{article.article}</p>

      <p className="article__info_label">Документ: <a href={arguments.material_link} className="article__label_text">*ссылка на документ*</a></p>

      <ArticleFormulas/>

      <Comments/>

    </div>
  )
}

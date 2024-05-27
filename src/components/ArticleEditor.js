import '../css/ArticleEditor.css';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import ArticleFormulas from './Article/ArticleFormulas.js';

import { URLS } from '../urls.js';
import { fetchWithAuth } from "/src/auth.js";

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
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const folderID = state?.folderID || null;

  const [article, setArticle] = useState({
    title: "",
    article: "",
    material_link: "",
    formula_ids: [],
    access: [],
    changed: "",
    folderID: folderID || ''
  });

  const URL = id ? `${URLS.articles}${id}/` : null;

  useEffect(() => {
    if (id) {
      fetchWithAuth(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка');
        }
        return response.json();
      })
      .then(data => setArticle(data))
      .catch(error => console.error("Error fetching article:", error));
    }
  }, [id]);

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    if (type === "checkbox") {
      setArticle(prevArticle => {
        const updatedAccessRoles = checked
          ? [...prevArticle.access, value]
          : prevArticle.access.filter(role => role !== value);
        return { ...prevArticle, access: updatedAccessRoles };
      });
    } else {
      setArticle({ ...article, [name]: value });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const method = id ? 'PUT' : 'POST';
    const requestURL = id ? URL : URLS.articles;

    fetchWithAuth(requestURL, {
      method,
      body: JSON.stringify(article)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка при сохранении статьи');
      }
      return response.json();
    })
    .then(() => navigate(-1))
    .catch(error => console.error("Error saving article:", error));
  };

  return (
    <form className="art-editor" onSubmit={handleSubmit}>

      <div className="art-editor__article">
      <textarea 
          name="title" 
          rows="1" 
          className="art-editor__title-input" 
          placeholder="Название статьи"
          value={article.title || ''}
          onChange={handleChange}
        />

        <label htmlFor="article-text" className="art-editor__article-label">Текст статьи</label>
  
        <textarea 
          name="article" 
          id="article-text" 
          className="art-editor__text-input" 
          placeholder="Начните писать вашу статью тут..."
          value={article.article || ''}
          onChange={handleChange}
        />      

        <label htmlFor="input-doc" className="art-editor__document">Документ: </label>
        <input 
          className="art-editor__add-link" 
          id="input-doc" 
          type="text" 
          name="material_link"
          placeholder='добавить ссылку на веб-ресурс'
          value={article.material_link || ''}
          onChange={handleChange}
        />

      </div>
      
      <ArticleFormulas showButtons={true} formulas={article.formula_ids}/>

      <div className='art-editor__access'>
        <h3 className='art-editor__optional_title'>Права доступа</h3>
        <div className='art-editor__checkboxes'>
          <ul className='art-editor__checkboxes-wrap'>
            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-1' name="role" value="AD"
                checked={article.access.includes('AD')} onChange={handleChange}/>
              <label className="art-editor__checkbox_label" htmlFor="role-1"> Руководитель</label>
            </li>
            
            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-2' name="role" value="DI"
                checked={article.access.includes('DI')} onChange={handleChange}/>
              <label className="art-editor__checkbox_label" htmlFor="role-2"> Директор</label>
            </li>

            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-3' name="role" value="AC"
                checked={article.access.includes('AC')} onChange={handleChange}/>
              <label className="art-editor__checkbox_label" htmlFor="role-3"> Бухгалтер</label>
            </li>

            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-4' name="role" value="AR"
                checked={article.access.includes('AR')} onChange={handleChange}/>
              <label className="art-editor__checkbox_label" htmlFor="role-4"> Архитектор</label>
            </li>
          </ul>

          <ul className='art-editor__checkboxes-wrap'>
            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-5' name="role" value="CE"
                checked={article.access.includes('CE')} onChange={handleChange}/>
              <label className="art-editor__checkbox_label" htmlFor="role-5"> Инженер-строитель</label>
            </li>
            
            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-6' name="role" value="LA"
                checked={article.access.includes('LA')} onChange={handleChange}/>
              <label className="art-editor__checkbox_label" htmlFor="role-6"> Юрист</label>
            </li>

            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-7' name="role" value="PL"
                checked={article.access.includes('PL')} onChange={handleChange}/>
              <label className="art-editor__checkbox_label" htmlFor="role-7"> Проектировщик</label>
            </li>
          </ul>
        </div>
      </div>

      {id && <div className='art-editor__changes'>
        <h3 className='art-editor__optional_title'>Измения в версии</h3>
        <textarea 
          name="changed" 
          className="art-editor__changes-input" 
          placeholder="Введите описание тех изменений, которые вы внесли в этой версии"
          onChange={handleChange}
        />
      </div>}

      <div className="art-editor__buttons-wrap">
        <button type="button" className="art-editor__btn reset" onClick={() => navigate(-1)}>Отмена</button>
        <button type="submit" className="art-editor__btn save">Сохранить</button>
      </div>
    </form>
  )
}

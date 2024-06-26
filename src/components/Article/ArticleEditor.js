import '/src/css//ArticleEditor.css';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import ArticleFormulas from './ArticleFormulas.js';

import { URLS } from '/src/urls.js';
import { fetchWithAuth } from "../../Auth/auth.js";

export default function ArticleEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const folderID = state?.folderID || null;

  const role = localStorage.getItem('role');

  const [article, setArticle] = useState({
    title: "",
    article: "",
    material_link: "",
    formula_ids: [],
    write_only_formula_ids: [],
    access: [role],
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
      .then(data => setArticle(prevArticle => ({
        ...prevArticle,
        ...data,
        write_only_formula_ids: data.formula_ids.map(formula => formula.id),
        access: [...new Set([...data.access, role])],
        changed: ''
      })))
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
        return { ...prevArticle, access: [...new Set([...updatedAccessRoles, role])] };
      });
    } else {
      setArticle({ ...article, [name]: value });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const method = id ? 'PUT' : 'POST';
    const requestURL = id ? URL : URLS.articles;
  
    const dataToSend = {
      ...article,
      write_only_formula_ids: article.write_only_formula_ids,
      access: [...new Set([...article.access, role])] 
    };
    delete dataToSend.formula_ids;
  
    fetchWithAuth(requestURL, {
      method,
      body: JSON.stringify(dataToSend) 
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
  
  const handleAddFormula = (newFormula) => {
    setArticle(prevArticle => ({
      ...prevArticle,
      formula_ids: [...prevArticle.formula_ids, newFormula],
      write_only_formula_ids: [...prevArticle.write_only_formula_ids, newFormula.id]
    }));
  };

  const handleRemoveFormula = (formulaId) => {
    setArticle(prevArticle => ({
      ...prevArticle,
      formula_ids: prevArticle.formula_ids.filter(formula => formula.id !== formulaId),
      write_only_formula_ids: prevArticle.write_only_formula_ids.filter(id => id !== formulaId)
    }));
  };
  
  return (
    <form className="art-editor" onSubmit={handleSubmit}>

      <div className="art-editor__article">
        <textarea 
          required
          name="title" 
          rows="1" 
          className="art-editor__title-input" 
          placeholder="*Введите название статьи*"
          value={article.title || ''}
          onChange={handleChange}
        />

        <label htmlFor="article-text" className="art-editor__article-label">Текст статьи</label>
  
        <textarea 
          required
          name="article" 
          id="article-text" 
          className="art-editor__text-input" 
          placeholder="Начните писать вашу статью тут..."
          value={article.article || ''}
          onChange={handleChange}
        />      

        <label htmlFor="input-doc" className="art-editor__document">Документ: </label>
        <input 
          required
          className="art-editor__add-link" 
          id="input-doc" 
          type="text" 
          name="material_link"
          placeholder='добавить ссылку на веб-ресурс'
          value={article.material_link || ''}
          onChange={handleChange}
        />

      </div>
      
      <ArticleFormulas 
        showButtons={true} 
        formulas={article.formula_ids} 
        onAddFormula={handleAddFormula} 
        onRemoveFormula={handleRemoveFormula}
      />

      <div className='art-editor__access'>
        <h3 className='art-editor__optional_title'>Права доступа</h3>
        <div className='art-editor__checkboxes'>
          <ul className='art-editor__checkboxes-wrap'>
            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-1' name="role" value="AD"
                checked={article.access.includes('AD') || role === 'AD'} 
                onChange={handleChange}
                readOnly={role === 'AD'}
              />
              <label className="art-editor__checkbox_label" htmlFor="role-1"> Руководитель</label>
            </li>
            
            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-2' name="role" value="DI"
                checked={article.access.includes('DI') || role === 'DI'} 
                onChange={handleChange}
                readOnly={role === 'DI'}
              />
              <label className="art-editor__checkbox_label" htmlFor="role-2"> Директор</label>
            </li>

            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-3' name="role" value="AC"
                checked={article.access.includes('AC') || role === 'AC'} 
                onChange={handleChange}
                readOnly={role === 'AC'}
              />
              <label className="art-editor__checkbox_label" htmlFor="role-3"> Бухгалтер</label>
            </li>

            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-4' name="role" value="AR"
                checked={article.access.includes('AR') || role === 'AR'} 
                onChange={handleChange}
                readOnly={role === 'AR'}
              />
              <label className="art-editor__checkbox_label" htmlFor="role-4"> Архитектор</label>
            </li>
          </ul>

          <ul className='art-editor__checkboxes-wrap'>
            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-5' name="role" value="CE"
                checked={article.access.includes('CE') || role === 'CE'}
                onChange={handleChange}
                readOnly={role === 'CE'}
              />
              <label className="art-editor__checkbox_label" htmlFor="role-5"> Инженер-строитель</label>
            </li>
            
            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-6' name="role" value="LA"
                checked={article.access.includes('LA') || role === 'LA'} 
                onChange={handleChange}
                readOnly={role === 'LA'}
              />
              <label className="art-editor__checkbox_label" htmlFor="role-6"> Юрист</label>
            </li>

            <li className='art-editor__checkbox_label-wrap'>
              <input type="checkbox" id='role-7' name="role" value="PL"
                checked={article.access.includes('PL') || role === 'PL'} 
                onChange={handleChange}
                readOnly={role === 'PL'}
              />
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
          value={article.changed || ''}
        />
      </div>}

      <div className="art-editor__buttons-wrap">
        <button type="button" className="art-editor__btn reset" onClick={() => navigate(-1)}>Отмена</button>
        <button type="submit" className="art-editor__btn save">Сохранить</button>
      </div>
    </form>
  )
}

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Entry from './Entry.js';
import Documents from './Documents/Documents.js';
import Article from './Article/Article.js';
import ArticlesList from './ArticlesList/ArticlesList.js';
import Versions from './Versions/Versions.js';
import Archive from './Archive/Archive.js';
import ArticleEditor from './ArticleEditor.js';
import Formulas from './Formulas/Formulas.js';

export default function Main() {
  return (
  <main>
		<Routes>
      <Route path='/' element={<Entry/>}/>
      <Route path='/documents' element={<Documents/>}/>
      <Route path='/article/:id' element={<Article/>}/>
      <Route path='/articles-list/:id' element={<ArticlesList/>} />
      <Route path='/versions' element={<Versions/>}/>
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/article-editor' element={<ArticleEditor/>}/>
      <Route path='/formulas' element={<Formulas/>}/>
    </Routes>
	</main>
  )
}

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Entry from './Entry.js';
import Documents from './Documents.js';
import Article from './Article.js';
import ArticlesList from './ArticlesList.js';
import Versions from './Versions.js';
import Archive from './Archive.js';

export default function Main() {
  return (
  <main>
		<Routes>
      <Route path='/' element={<Entry/>}/>
      <Route path='/documents' element={<Documents/>}/>
      <Route path='/article' element={<Article/>}/>
      <Route path='/articles-list' element={<ArticlesList/>}/>
      <Route path='/versions' element={<Versions/>}/>
      <Route path='/archive' element={<Archive/>}/>
    </Routes>
	</main>
  )
}

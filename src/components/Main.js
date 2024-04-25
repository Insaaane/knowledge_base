import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Entry from './Entry.js';
import Documents from './Documents.js';

export default function Main() {
  return (
  <main>
		<Routes>
      <Route path='/' element={<Entry/>}/>
      <Route path='/documents' element={<Documents/>}/>
    </Routes>
	</main>
  )
}

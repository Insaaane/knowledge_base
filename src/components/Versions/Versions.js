import '/src/css/Versions.css';
import React, { useEffect, useState } from 'react';

import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "/src/auth.js";
import { useParams } from 'react-router-dom';

import VersionsItem from "./VersionsItem.js";

export default function Versions() {
  const [versions, setVersions] = useState([]);
  const { id } = useParams();

  const URL = `${URLS.versions}${id}/`;

  useEffect(() => {
    fetchWithAuth(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setVersions(data))
    .catch(error => console.error('Ошибка получения статей:', error));
  }, []);

  return (
  <div className="versions">
      
    <h1 className="versions__title title">Версии статьи</h1>

      <ul className="versions__list">

        {versions.slice(0).reverse().map((version, index, array) => (
          <VersionsItem 
            key={version.id}
            author={version.authorID}
            date={version.creation_date}
            changes={version.changed}
            index={index}
            array={array}
          />
        ))}

      </ul>

    </div>
  )
}

import '/src/css/Versions.css';
import React, { useEffect, useState } from 'react';

import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "../../Auth/auth.js";
import { useParams } from 'react-router-dom';

import VersionsItem from "./VersionsItem.js";

function sortVersions(data) {
  return data.sort((a, b) => new Date(a.creation_date) - new Date(b.creation_date));
}

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
    .then(data => {
      setVersions(sortVersions(data));
    })
    .catch(error => console.error('Ошибка получения статей:', error));
  }, []);

  if (!versions.length) {
    return <div className="loading">Loading...</div>;
  }

  return (
  <div className="versions">
      
    <h1 className="versions__title title">Версии статьи</h1>

      <ul className="versions__list">

        {versions.slice(0).reverse().map((version, index, array) => (
          <VersionsItem 
            key={version.id}
            author={version.author}
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

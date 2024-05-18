import React, { useEffect, useState } from 'react';
import '/src/css/Versions.css';
import VersionsItem from "./VersionsItem.js";
import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "/src/auth.js";

export default function Versions() {
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    fetchWithAuth(`${URLS.versions}${1}/`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setVersions(data))
    .catch(error => console.error("Error fetching articles:", error));
  }, []);

  return (
  <div className="versions">
      
    <h1 className="versions__title title">Версии статьи</h1>

      <ul className="versions__list">

        {versions.map(version => (
            <VersionsItem 
              key={version.id}
              author={version.authorID}
              date={version.creation_date}
              changes={version.changed}
            />
        ))}

      </ul>

    </div>
  )
}

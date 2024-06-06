import "/src/css/Documents.css";
import React from "react";

import { Link } from "react-router-dom";
import { URLS } from "/src/urls.js";
import { fetchWithAuth } from "../../Auth/auth.js";

import Card1 from "/markup/img/regulatory-docs-img.png";
import Card2 from "/markup/img/staff-info-img.png";
import Card3 from "/markup/img/accounting-img.png";
import Card4 from "/markup/img/projects-img.png";
import Card5 from "/markup/img/commerce-docs-img.png";
import Card6 from "/markup/img/organization-docs-img.png";
import DeleteIcon from "/markup/img/delete-icon.svg";

const CARDS = [Card1, Card2, Card3, Card4, Card5, Card6];

export default function Folder( { folder, onDelete } ) {

  const URL = `${URLS.folders}${folder.id}/`;

  const handleDelete = (evt) => {
    evt.preventDefault();

    fetchWithAuth(URL, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      onDelete(folder.id);
    })
    .catch(error => console.error('Ошибка удаления папки:', error));
  };

  return (
    <Link to={`/articles-list/${folder.id}`} className="main__card">
      <img className="main__card-img" src={CARDS[Math.floor(Math.random() * CARDS.length)]} alt={folder.title}/>
      <h2 className="main__card-title">{folder.title}</h2>
      <img className="main__card_delete-btn" src={DeleteIcon} onClick={handleDelete} alt="Delete"/>
    </Link>
  );
}
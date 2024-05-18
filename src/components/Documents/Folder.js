import "/src/css/Documents.css";
import React from "react";
import Card1 from "/markup/img/regulatory-docs-img.png";
import Card2 from "/markup/img/staff-info-img.png";
import Card3 from "/markup/img/accounting-img.png";
import Card4 from "/markup/img/projects-img.png";
import Card5 from "/markup/img/commerce-docs-img.png";
import Card6 from "/markup/img/organization-docs-img.png";
import { Link } from "react-router-dom";

const CARDS = [Card1, Card2, Card3, Card4, Card5, Card6];

export default function Folder( { title } ) {
  return (
    <Link to='/articles-list' className="main__card">
      <img className="main__card-img" src={CARDS[Math.floor(Math.random() * CARDS.length)]} alt={title}/>
      <h2 className="main__card-title">{title}</h2>
    </Link>
  );
}
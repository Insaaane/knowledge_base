import '/src/css/Article.css';
import React from 'react';

import { formatDateTime } from '../../util.js';

import Avatar from "/markup/img/avatar-circle.png";
import DeleteIcon from "/markup/img/delete-icon.svg";

export default function CommentsItem({ comment, onDelete }) {
  return (
    <li className="article__comment">
      <div className='article__comment-wrap'>
        <img className="article__comment_logo" src={Avatar} alt="Аватар пользователя" />
        <div className="article__comment_info">
          <span className="article__comment_about">{comment.user}</span>
          <span className="article__comment_about">{comment.creation_date && formatDateTime(comment.creation_date)}</span>
          <p className="article__comment_text">{comment.content}</p>
        </div>
      </div>
      <div className='article__comment_options-wrap'>
        <img 
          className='article__comment-delete-btn' 
          src={DeleteIcon} 
          alt='Удалить' 
          onClick={() => onDelete(comment.id)}
        />
      </div>
    </li>
  )
}

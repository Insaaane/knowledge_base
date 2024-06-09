import '/src/css/Article.css';
import React from 'react';

import Avatar from "/markup/img/avatar-circle.png";
import EditIcon from "/markup/img/edit-icon.svg";
import DeleteIcon from "/markup/img/delete-icon.svg";

export default function CommentsItem() {
  return (
    <li className="article__comment">
      <div className='article__comment-wrap'>
        <img className="article__comment_logo" src={Avatar} alt="Аватар пользователя" />
        <div className="article__comment_info">
          <span className="article__comment_about">Emma Shifter</span>
          <span className="article__comment_about">8 месяцев назад</span>
          <p className="article__comment_text">
            Sed ut volutpat diam, ut finibus erat. Suspendisse et vulputate enim. Nulla fringilla dolor vitae
            suscipit pellentesque. <br />
            Sed a faucibus ante. Phasellus condimentum arcu commodo nisl tincidunt, a luctus magna placerat.
          </p>
        </div>
      </div>
      <div className='article__comment_options-wrap'>
          <img className='artilce__comment-delete-btn' src={DeleteIcon} alt='Удалить' />
      </div>
    </li>
  )
}

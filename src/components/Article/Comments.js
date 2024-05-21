import React from 'react';
import '/src/css/Article.css';
import SendMessageIcon from "/markup/img/send-message-icon.svg";
import CommentsItem from './CommentsItem.js';

const styles = {
  sendMessageIcon: {
    background: `url(${SendMessageIcon}) no-repeat right center`
  }
};

export default function Comments() {
  return (
    <div className="article__comments">
      <h3 className="article__comments_title">Комментарии</h3>

      <div className="article__comment_input-wrap">
        <textarea className="article__comment_input" name="" id="" cols="" rows="" placeholder="Напишите тут"></textarea>
        <button className="article_comment_send-btn" style={styles.sendMessageIcon}>Отправить</button>
      </div>

      <ul className="article__comments_list">

        <CommentsItem/>
        <CommentsItem/>
        
      </ul>
    </div>
  )
}

import '/src/css/Article.css';
import React, { useEffect, useState } from 'react';

import { URLS } from '../../urls.js';
import { fetchWithAuth } from '../../Auth/auth.js';

import SendMessageIcon from "/markup/img/send-message-icon.svg";
import CommentsItem from './CommentsItem.js';

const styles = {
  sendMessageIcon: {
    background: `url(${SendMessageIcon}) no-repeat right center`
  }
};

function sortByDate(data) {
  return data.sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date));
}

export default function Comments({ articleID }) {
  const [comments, setComments] = useState(null);
  const [newComment, setNewComment] = useState("");

  const URL = `${URLS.comments}${articleID}/comments/`;

  useEffect(() => {
    fetchWithAuth(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка');
        }
        return response.json();
      })
      .then(data => setComments(data))
      .catch(error => console.error("Error fetching comments:", error));
  }, []);

  const handleCommentSubmit = (evt) => {
    evt.preventDefault();

    fetchWithAuth(URL, {
      method: 'POST',
      body: JSON.stringify({ content: newComment })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка');
        }
        return response.json();
      })
      .then(data => {
        setComments(prevComments => [...prevComments, data]);
        setNewComment("");
      })
      .catch(error => console.error("Error sending comment:", error));
  }

  const handleDeleteComment = (commentID) => {
    fetchWithAuth(`${URLS.comments_delete}${commentID}/`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка удаления комментария');
        }
        setComments(prevComments => prevComments.filter(comment => comment.id !== commentID));
      })
      .catch(error => console.error("Error deleting comment:", error));
  }

  return (
    <div className="article__comments">
      <h3 className="article__comments_title">Комментарии</h3>

      <form className="article__comment_input-wrap" onSubmit={handleCommentSubmit}>
      <textarea 
          className="article__comment_input" 
          placeholder="Напишите тут" 
          required 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="article_comment_send-btn" type='submit' style={styles.sendMessageIcon} >Отправить</button>
      </form>

      <ul className="article__comments_list">

        {comments && sortByDate(comments).map(comment => (
          <CommentsItem 
            key={comment.id} 
            comment={comment}
            onDelete={handleDeleteComment}
          />
        ))}
        
      </ul>
    </div>
  )
}

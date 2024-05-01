import React from 'react';
import '../css/Article.css';
import EditIcon from "/Users/daybo/Desktop/knowledge_base/markup/img/edit-icon.svg";
import Avatar from "/Users/daybo/Desktop/knowledge_base/markup/img/avatar-circle.png";
import VersionsIcon from "/Users/daybo/Desktop/knowledge_base/markup/img/versions-icon.svg";
import AddFormulaIcon from "/Users/daybo/Desktop/knowledge_base/markup/img/add-icon.svg";
import SendMessageIcon from "/Users/daybo/Desktop/knowledge_base/markup/img/send-message-icon.svg";
import { Link } from 'react-router-dom';

const styles = {
  versionsIcon: {
    background: `url(${VersionsIcon}) no-repeat left center`
  },
  addFormulaIcon: {
    background: `url(${AddFormulaIcon}) no-repeat left 10px`
  },
  sendMessageIcon: {
    background: `url(${SendMessageIcon}) no-repeat right center`
  }
};

export default function Article() {
  return (
    <div className="article">
      <h1 className="article__title title">Статья о документе</h1>

      <div className="article__info_wrap">
        <div className="article__info">
          <p className="article__info_label">Текст: <span className="article__label_text">Emma Shifter</span></p>
          <p className="article__info_label">Дата: <span className="article__label_text">21 декабря 2023</span></p>
        </div>

        <Link to='/versions' className="article__versions-btn" style={styles.versionsIcon}>история версий</Link>
      </div>

      <p className="article__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus ipsum sit amet iaculis mollis. Suspendisse
        lacinia tincidunt enim eu finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Ut fringilla ligula ligula, et tempor odio aliquam eu.<br />
        Nam ut augue nunc. Nunc et enim finibus, semper dolor id, tincidunt magna. Nam blandit gravida velit sed
        posuere.<br />
        Donec sem mi, maximus non turpis ullamcorper, accumsan mollis enim.<br />
        Maecenas justo est, mattis id sagittis et, elementum vitae purus. Suspendisse sit amet volutpat orci.<br />
        Nullam suscipit orci ac ipsum tincidunt pretium. Vestibulum vestibulum et augue non suscipit.<br />
        Phasellus vel dapibus sapien, non scelerisque dolor. Donec dictum nunc dolor, vitae iaculis arcu interdum vel.<br />
        Sed ut volutpat diam, ut finibus erat. Suspendisse et vulputate enim. Nulla fringilla dolor vitae suscipit
        pellentesque. Sed a faucibus ante. Phasellus condimentum arcu commodo nisl tincidunt, a luctus magna placerat.
        Nullam ut lectus nec urna finibus consectetur ut et tellus. Suspendisse sit amet porta lorem. Sed imperdiet
        sodales ligula quis semper. In hac habitasse platea dictumst. Praesent eros libero, molestie in nisl nec, semper
        mollis tortor. Etiam eget maximus dui, eget finibus neque.
      </p>

      <p className="article__info_label">Документ: <a href="#" className="article__label_text">*ссылка на документ*</a></p>

      <div className="article__formulas">
        <div className="article__formulas_title-wrap">
          <h2 className="article__formulas_title">Список используемых формул</h2>
          <button className="article__add-formula" style={styles.addFormulaIcon}>добавить формулу</button>
        </div>

        <ul className="article__formulas-list">
          <li className="article__formulas-item">
            <p className="article__formula_nubmer-wrap">
              [<span className="article__formula_nubmer">1</span>]
            </p>
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="article__formula_preview"/>
            <p className="article__formula_name">формула для расчета квадрата суммы</p>
            <button className="article__formula_edit-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </li>

          <li className="article__formulas-item">
            <p className="article__formula_nubmer-wrap">
              [<span className="article__formula_nubmer">2</span>]
            </p>
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="article__formula_preview"/>
            <p className="article__formula_name">формула для расчета квадрата суммы</p>
            <button className="article__formula_edit-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon"/>
            </button>
          </li>

          <li className="article__formulas-item">
            <p className="article__formula_nubmer-wrap">
              [<span className="article__formula_nubmer">3</span>]
            </p>
            <img src="https://latex.codecogs.com/svg.image?\LARGE&space;(x+y)^2=x^2+y^2+2xy" alt="Формула"
              className="article__formula_preview" />
            <p className="article__formula_name">формула для расчета квадрата суммы</p>
            <button className="article__formula_edit-btn">
              <img src={EditIcon} alt="Редактировать формулу" className="article__formula_edit-icon" />
            </button>
          </li>
        </ul>

      </div>

      <div className="article__comments">
        <h3 className="article__comments_title">Комментарии</h3>

        <div className="article__comment_input-wrap">
          <textarea className="article__comment_input" name="" id="" cols="" rows="" placeholder="Напишите тут"></textarea>
          <button className="article_comment_send-btn" style={styles.sendMessageIcon}>Отправить</button>
        </div>

        <ul className="article__comments_list">

          <li className="article__comment">
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
          </li>

          <li className="article__comment">
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
          </li>

        </ul>
      </div>

    </div>
  )
}

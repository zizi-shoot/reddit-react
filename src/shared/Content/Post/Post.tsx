import React from 'react';
import ReactDOM from 'react-dom';
import { useCloseModal } from '../../../hooks/useCloseModal';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import { ArrowBackIcon, MenuIcon } from '../../Icons';
import avatar2 from '../../img/avatar2.png';

interface IPost {
  onClose: () => void;
}

export function Post({ onClose }: IPost) {
  const ref = useCloseModal(onClose);
  const modal = document.getElementById('modal');
  if (!modal) return null;

  const handleClick = () => {
  };

  return ReactDOM.createPortal((
    <article className="post__container" ref={ref}>
      <header className="post__header">
        <button className="post__close-btn" type="button" aria-label="закрыть окно">
          <ArrowBackIcon />
        </button>
        <span className="post__votes">54% проголосовали</span>
        <button className="post__menu-btn" type="button" aria-label="открыть меню">
          <MenuIcon />
        </button>
      </header>
      <main className="post__body">
        <div className="card__text-content text-content">
          <div className="text-content__meta text-meta">
            <div className="text-meta__link">
              <img
                src={avatar2}
                alt="avatar"
                className="text-meta__avatar"
              />
              <a href="#user-url" className="text-meta__username">Владимир Петроа</a>
            </div>
            <span className="text-content__created-at text-created-at">
              <span className="text-created-at__label">опубликовано</span>
              5 часов назад
            </span>
            <span className="text-content__division">Законодательство</span>
          </div>
          <h2 className="text-content__title text-title">
            Следует отметить, что новая модель организационной деятельности поможет
          </h2>
        </div>
        <div className="post__content">
          <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
          <p>Безусловно, глубокий уровень погружения создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы массового участия. Внезапно, сделанные на базе интернет-аналитики выводы освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно.</p>
          <p>Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании новых принципов формирования материально-технической и кадровой базы. Также как существующая теория в значительной степени обусловливает важность благоприятных перспектив. Для современного мира консультация с широким активом однозначно определяет каждого участника как способного принимать собственные решения касаемо приоритизации разума над эмоциями!</p>
        </div>
        <CommentForm />
        <CommentList />
      </main>
    </article>
  ), modal);
}

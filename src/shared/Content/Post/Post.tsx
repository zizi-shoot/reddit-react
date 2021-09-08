import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useHistory } from 'react-router-dom';
import styles from './post.scss';
import { useCloseModal } from '../../../hooks/useCloseModal';
import { CommentList } from './CommentList';
import { EIcons, Icon } from '../../Icon';
import { generateId } from '../../../utils/react/generateRandomIndex';
import { Controls } from '../CardsList/Card/Controls';
import { KarmaCounter } from '../CardsList/Card/KarmaCounter';
import { Menu } from '../Menu';
import menuStyles from '../Menu/menu.scss';
import { TextContentContainer } from '../TextContentContainer';
import { CommentForm } from './CommentForm';

const SUBCOMMENTS2 = [
  {
    author: 'NicholasL86',
    created: 1626867392,
    score: 88,
    partition: 'Лига консультантов',
  },
].map(generateId);

const SUBCOMMENTS1 = [
  {
    author: 'Stunning-Tennis1808',
    created: 1626882118,
    score: 13,
    partition: 'Лига кадровиков',
    subitems: SUBCOMMENTS2,
  },
].map(generateId);

const COMMENTS = [
  {
    author: 'a_antoci',
    created: 1626857334,
    score: 55,
    partition: 'Лига юристов',
    subitems: SUBCOMMENTS1,
  },
  {
    author: 'sudofox',
    created: 1626886322,
    score: 3,
    partition: 'Лига политологов',
  },
  {
    author: 'beforesemicolon',
    created: 1626888915,
    score: 19,
    partition: 'Лига социологов',
  },
  {
    author: 'Bonteq',
    created: 1626894007,
    score: 14,
    partition: 'Лига экономистов',
    subitems: SUBCOMMENTS1,
  },
].map(generateId);

const MENU_ITEMS = [
  {
    As: 'li' as const,
    className: menuStyles.item,
    text: 'Комментарии',
    icon: Icon({ name: EIcons.comments, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: menuStyles.item,
    text: 'Поделиться',
    icon: Icon({ name: EIcons.share, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: menuStyles.item,
    text: 'Скрыть',
    icon: Icon({ name: EIcons.hide, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: menuStyles.item,
    text: 'Сохранить',
    icon: Icon({ name: EIcons.save, size: 14, mobileSize: 12 }),
  },
  {
    As: 'li' as const,
    className: menuStyles.item,
    text: 'Пожаловаться',
    icon: Icon({ name: EIcons.complain, size: 16, mobileSize: 14 }),
  },
].map(generateId);

export function Post() {
  const ref = useCloseModal({ onClose });
  const modal = document.getElementById('modal');
  const history = useHistory();

  function onClose() {
    history.push('/posts');
    modal?.classList.toggle('post--hidden');
    if (modal) enableBodyScroll(modal);
    clearAllBodyScrollLocks();
  }

  useEffect(() => {
    modal?.classList.toggle('post--hidden');
    if (modal) disableBodyScroll(modal);
  }, []);

  if (!modal) return null;

  return ReactDOM.createPortal((
    <article className={styles.container} ref={ref}>
      <header className={styles.header}>
        <button className={styles.closeBtn} type="button" aria-label="закрыть окно">
          <Icon name={EIcons.arrowBack} size={16} />
        </button>
        <span className={styles.votes}>54% проголосовали</span>
        <button className={styles.menuBtn} type="button" aria-label="открыть меню">
          <Icon name={EIcons.menu} size={20} />
        </button>
      </header>
      <main className={styles.main}>
        <TextContentContainer
          username="zizi_shoot"
          title="Следует отметить, что новая модель организационной деятельности поможет"
          createdAt={1626569316}
          extraClass={styles.textContent}
          isModal
        />
        <div className={styles.content}>
          <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
          <p>Безусловно, глубокий уровень погружения создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы массового участия. Внезапно, сделанные на базе интернет-аналитики выводы освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно.</p>
          <p>Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании новых принципов формирования материально-технической и кадровой базы. Также как существующая теория в значительной степени обусловливает важность благоприятных перспектив. Для современного мира консультация с широким активом однозначно определяет каждого участника как способного принимать собственные решения касаемо приоритизации разума над эмоциями!</p>
        </div>
        <Controls extraClass={styles.controls}>
          <KarmaCounter karma={12} />
        </Controls>
        <div className={styles.sort}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="sortBtn" className={styles.sortLabel}>Сортировать по:</label>
          <button type="button" id="sortBtn" className={styles.sortBtn}>Лучшие</button>
        </div>
        <Menu items={MENU_ITEMS} extraClass={styles.menu} />
        <CommentForm
          extraClass={styles.commentForm}
        />
        <CommentList items={COMMENTS} extraClass={styles.commentList} />
      </main>
    </article>
  ), modal);
}

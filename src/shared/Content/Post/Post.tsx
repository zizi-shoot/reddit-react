import React from 'react';
import ReactDOM from 'react-dom';
import styles from './post.scss';
import { useCloseModal } from '../../../hooks/useCloseModal';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import { TextContent } from '../CardsList/Card/TextContent';
import { EIcons, Icon } from '../../Icon';
import { generateId } from '../../../utils/react/generateRandomIndex';

interface IPostProps {
  onClose: () => void;
}

const SUBCOMMENTS2 = [
  {
    author: 'NicholasL86',
    created: '1626867392',
    score: 88,
    partition: 'Лига консультантов',
  },
].map(generateId);

const SUBCOMMENTS1 = [
  {
    author: 'Stunning-Tennis1808',
    created: '1626882118',
    score: 13,
    partition: 'Лига кадровиков',
    subitems: SUBCOMMENTS2,
  },
].map(generateId);

const COMMENTS = [
  {
    author: 'a_antoci',
    created: '1626857334',
    score: 55,
    partition: 'Лига юристов',
    subitems: SUBCOMMENTS1,
  },
  {
    author: 'sudofox',
    created: '1626886322',
    score: 3,
    partition: 'Лига политологов',
  },
  {
    author: 'beforesemicolon',
    created: '1626888915',
    score: 19,
    partition: 'Лига социологов',
  },
  {
    author: 'Bonteq',
    created: '1626894007',
    score: 14,
    partition: 'Лига экономистов',
    subitems: SUBCOMMENTS1,
  },
].map(generateId);

export function Post({ onClose }: IPostProps) {
  const ref = useCloseModal(onClose);
  const modal = document.getElementById('modal');
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
      <main>
        <TextContent
          username="zizi_shoot"
          title="Следует отметить, что новая модель организационной деятельности поможет"
          createdAt="1626569316"
        />
        <div className={styles.content}>
          <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
          <p>Безусловно, глубокий уровень погружения создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы массового участия. Внезапно, сделанные на базе интернет-аналитики выводы освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно.</p>
          <p>Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании новых принципов формирования материально-технической и кадровой базы. Также как существующая теория в значительной степени обусловливает важность благоприятных перспектив. Для современного мира консультация с широким активом однозначно определяет каждого участника как способного принимать собственные решения касаемо приоритизации разума над эмоциями!</p>
        </div>
        <CommentForm />
        <CommentList items={COMMENTS} />
      </main>
    </article>
  ), modal);
}

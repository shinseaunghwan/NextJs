import DOMPurify from 'dompurify';
import cafe from './cafe.module.css';
import ui from '../../../styles/ui.module.css';

export default function CafePage({results}) {
 
 const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };


  return (
    <div className={cafe.container}>
    {results.map((item) => (
      <div className={cafe.kinBox} key={item.title}>
        <h4 dangerouslySetInnerHTML={createMarkup(item.title)} />
        <p className={cafe.text}
          dangerouslySetInnerHTML={createMarkup(item.description)}
        />
        <a className={`${ui.button3} ${ui.mgt10}`} href={item.link} target="_blank" title={item.title}>
          더보기
        </a>
      </div>
    ))}
  </div>
  );
}

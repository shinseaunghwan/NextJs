import DOMPurify from 'dompurify';
import kin from './kin.module.css';
import ui from '../../../styles/ui.module.css';

export default function KinPage({results}) {
 
 const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };


  return (
    <div className={kin.container}>
    {results.map((item) => (
      <div className={kin.kinBox} key={item.title}>
        <h4 dangerouslySetInnerHTML={createMarkup(item.title)} />
        <p
          className={kin.text}
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

import DOMPurify from 'dompurify';
import newsStyled from './news.module.css';
import ui from '../../../styles/ui.module.css';

export default function NewsPage({results}) {
  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
      <div className={newsStyled.container}>
        {results.map((item) => (
          <div className={newsStyled.newsBox} key={item.title}>
            <h4 dangerouslySetInnerHTML={createMarkup(item.title)} />
            <p
              className={newsStyled.text}
              dangerouslySetInnerHTML={createMarkup(item.description)}
            />
            <div className={newsStyled.datelinkBox}>
              <p className={newsStyled.date}>{item.pubDate}</p>
              <a className={`${ui.button2} ${ui.mgt10}`} href={item.link} target="_blank" title={item.title}>
                뉴스 더보기
              </a>
            </div>
          </div>
        ))}
      </div>
  );
}

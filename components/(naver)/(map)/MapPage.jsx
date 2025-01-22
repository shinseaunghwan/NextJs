import DOMPurify from 'dompurify';
import map from './map.module.css';
import ui from '../../../styles/ui.module.css';

export default function MapPage({results}) {
 
 const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };


  return (
        <div className={map.container}>
          {results.map((item) => (
            <div className={map.contBox} key={item.title}>
               <h3 dangerouslySetInnerHTML={createMarkup(item.title)} />
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.telephone}</p>
                <p>{item.address}</p>
                <p>
                  <a className={ui.button3} href={item.link} target="_blank">
                    자세히 보기
                  </a>
                </p>
            </div>
          ))}
        </div>
  );
}

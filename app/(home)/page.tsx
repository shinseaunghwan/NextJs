import Clock2 from "../../components/(react-cont)/Clock2";
import ui from "../../styles/ui.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons'; 

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
    <h3>Home <FontAwesomeIcon className={ui.icon} icon={faHouse}/></h3>
      <Clock2 /> 
      <div className={ui.itembox}>
      <h3>리엑트 공부</h3>
        <ul className={ui.list_st1}>
          <li> Swiper 서버 렌더링하고 클라이언트 렌더링 분리 </li>
          <li> naver api 활용  </li>
          <li> gogle Translate 활용 </li>
          <li> ... 추가중 </li>
        </ul>
      </div>
    </>
  );
}




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
      </div>
      
    </>
  );
}





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; 
import ui from "../styles/ui.module.css"

export default function Loading() {
    return (
      <div className={ui.loadingBox}>
            <FontAwesomeIcon icon={faSpinner} spin/>
      </div>
    );
  }
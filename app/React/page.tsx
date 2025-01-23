
import Clock from "../../components/(react-cont)/Clock"
import Calculator from "../../components/(react-cont)/Calculator"
import Lotto from "../../components/(react-cont)/Lotto"
import Reservation from "../../components/(react-cont)/Reservation"
import Signup from "../../components/(react-cont)/Signup"
import CountdownToSaturday from "../../components/(react-cont)/CountdownToSaturday"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import ui from "../../styles/ui.module.css"

export const metadata = {
  title: "React",
};

export default function AboutUs() {
  return (
    <>
      <h3>React <FontAwesomeIcon icon={faCode} className={ui.icon}/></h3>
      <Clock />
      <CountdownToSaturday />
      <Calculator />
      <Lotto />
      <Reservation />
      <Signup />
      </>
  );
}
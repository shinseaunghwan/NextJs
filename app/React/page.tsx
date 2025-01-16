import react from "../../styles/react.module.css"
import Clock from "../../components/(react-cont)/Clock"
import Calculator from "../../components/(react-cont)/Calculator"
import Lotto from "../../components/(react-cont)/Lotto"
import Reservation from "../../components/(react-cont)/Reservation"
import Signup from "../../components/(react-cont)/Signup"
import CountdownToSaturday from "../../components/(react-cont)/CountdownToSaturday"

export const metadata = {
  title: "React",
};

export default function AboutUs() {
  return (
    <div className={react.container}>
      <h3>React</h3>
      <Clock />
      <CountdownToSaturday />
      <Calculator />
      <Lotto />
      <Reservation />
      <Signup />

    </div>
  );
}
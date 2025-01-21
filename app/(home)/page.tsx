import Clock2 from "../../components/(react-cont)/Clock2";
import ui from "../../styles/ui.module.css"

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
    <h3>Home</h3>
      <Clock2 />
      <div className={ui.itembox}>
        <h5>승환 열심히 개발중</h5>
      </div>
    </>
  );
}
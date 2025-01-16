import Clock2 from "../../components/(react-cont)/Clock2";
import home from "../../styles/home.module.css"

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <div className={home.container}>
      <h3>Home</h3>
      <Clock2 />
    </div>
  );
}
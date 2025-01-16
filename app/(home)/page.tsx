import home from "../../styles/home.module.css"

export const metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <div className={home.container}>
      <h3>Home</h3>
      <p>nextJs 연습</p>
      <p>2025-01-25</p>
    </div>
  );
}
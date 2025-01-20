import style from "../(videos)/(moviecss)/movie-credits.module.css"
import CreditsList from "./(credits)/credit-list";

export default function MovieCredits({ id }: { id: string }) {
  return (
    <div className={style.container}>
      <h3>Credits</h3>
      <CreditsList id={id} />
  </div>
  );
}
import style from "../(videos)/(moviecss)/movie-credits.module.css"
import CreditsList from "./(credits)/credit-list";

export default function MovieCredits({ id }: { id: string }) {
  return (
    <div className={style.container}>
      <h3>감독/출연</h3>
      <CreditsList id={id} />
  </div>
  );
}
import SimilarList from "./(similar)/similar-list";
import style from "../(videos)/(moviecss)/movie-similar.module.css"

export default function MovieSimilar({ id }: { id: string }) {
  return (
    <div className={style.container}>
      <h3>비슷한 장르</h3>
    <SimilarList id={id}/>
  </div>
  );
}
import SimilarList from "./(similar)/similar-list";
import style from "../styles/movie-similar.module.css"

export default function MovieSimilar({ id }: { id: string }) {
  return (
    <div className={style.container}>
      <h3>Similar</h3>
    <SimilarList id={id}/>
  </div>
  );
}
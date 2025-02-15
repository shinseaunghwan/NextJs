import style from "../(videos)/(moviecss)/movie-info.module.css"
import ui from "../../styles/ui.module.css"

import { API_URL } from "../../app/constants";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
      <div className={style.container}>
      <img className={style.poster} src={movie.poster_path} alt={movie.title} />
      <img className={style.backdrop} src={movie.backdrop_path} alt={movie.title} />
      <div className={style.info}>
        <h1 className={style.title}> {movie.title} </h1>
        <h3>⭐ {movie.vote_average.toFixed(1)} </h3>
        <p> {movie.overview} </p>
        <span> {movie.release_date} </span>
        <div><a className={ui.button} href={movie.homepage} target={"_blank"}>HomePage &rarr;</a></div>
      </div>
    </div>
  );
}

import style from "../(videos)/(moviecss)/movie-videos.module.css"
import MovieList from "./(video)/movie-list";



export default function MovieVideos({ id }: { id: string }) {
  return (
    <div className={style.container}>
      <h3>예고편</h3>
      <MovieList id={id} />
    </div>
  )
  ;
}

import style from "../(videos)/(moviecss)/movie-videos.module.css"
import MovieList from "./(video)/movie-list";



export default function MovieVideos({ id }: { id: string }) {
  return (
    <div className={style.container}>
      <h3>MovieList</h3>
      <MovieList id={id} />
    </div>
  )
  ;
}
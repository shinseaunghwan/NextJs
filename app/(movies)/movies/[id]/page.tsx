import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieSimilar from "../../../../components/movie-similar";
import MovieCredits from "../../../../components/movie-credits";


type IParams = Promise<{ id: string }>

export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  }
};
export default async function MovieDetail(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  return (
    <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie credits</h1>}>
      <MovieCredits id={id}/>
      </Suspense>
      <Suspense fallback={<h1>Loading movie similar</h1>}>
        <MovieSimilar id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
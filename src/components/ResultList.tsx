import { useRecoilValue } from "recoil";
import movieSearchState from "../atoms/movieSearchState";
import Movie from "../models/Movie";
import SearchStatus from "../models/SearchStatus";
import ResultItem from "./ResultItem";

function ResultList() {
  const movieSearch = useRecoilValue(movieSearchState);

  if (isMovieList(movieSearch)) {
    return (
      <div className="mt-8 mx-8">
        {movieSearch.map((movie) => (
          <ResultItem movie={movie} />
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

function isMovieList(search: SearchStatus | Movie[]): search is Movie[] {
  return (search as Movie[]).map !== undefined;
}

export default ResultList;

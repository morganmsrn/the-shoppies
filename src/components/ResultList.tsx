import { useRecoilValue } from "recoil";
import { ThreeDots } from "react-bootstrap-icons";
import movieSearchState from "../atoms/movieSearchState";
import Movie from "../models/Movie";
import SearchStatus from "../models/SearchStatus";
import ResultItem from "./ResultItem";

function ResultList() {
  const movieSearch = useRecoilValue(movieSearchState);

  if (isMovieList(movieSearch)) {
    return (
      <div className="flex flex-wrap flex-1 mt-8 mx-8 justify-center">
        {movieSearch.map((movie) => (
          <div>
            <ResultItem key={movie.imdbID} movie={movie} />
          </div>
        ))}
      </div>
    );
  } else {
    switch (movieSearch) {
      case SearchStatus.Error: {
        return (
          <div className="m-auto mt-40 text-4xl text-gray-900">
            <p>Error !</p>
            <p>Movie database unreachable.</p>
          </div>
        );
      }
      case SearchStatus.Loading: {
        return (
          <ThreeDots className="animate-pulse m-auto mt-40 text-4xl text-gray-900" />
        );
      }
      case SearchStatus.NoResults: {
        return (
          <p className="mt-40 text-center text-2xl text-gray-900">
            No results found.
          </p>
        );
      }
      case SearchStatus.NoSearch: {
        return (
          <p className="mt-40 text-center text-2xl text-gray-900">
            Search movies and add 5 to your nomination list.
          </p>
        );
      }
    }
    return <div></div>;
  }
}

function isMovieList(search: SearchStatus | Movie[]): search is Movie[] {
  return (search as Movie[]).map !== undefined;
}

export default ResultList;

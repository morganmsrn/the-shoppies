import { useRecoilValue } from "recoil";
import { NoResult } from "./NoResult";
import { movieSearchState } from "../atoms/movieSearchState";
import { Movie } from "../models/Movie";
import { SearchStatus } from "../models/SearchStatus";
import { ResultItem } from "./ResultItem";

const movieSearch = useRecoilValue(movieSearchState);

const isMovieList = (search: SearchStatus | Movie[]): search is Movie[] =>
  (search as Movie[]).map !== undefined;

export const ResultList = () =>
  isMovieList(movieSearch) ? (
    <div className="flex flex-wrap flex-1 mt-8 mx-8 justify-center">
      {movieSearch.map((movie) => (
        <div key={movie.imdbID}>
          <ResultItem movie={movie} />
        </div>
      ))}
    </div>
  ) : (
    <NoResult search={movieSearch} />
  );

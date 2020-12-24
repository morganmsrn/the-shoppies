import axios from "axios";
import { SetterOrUpdater } from "recoil";
import Movie from "../models/Movie";
import SearchStatus from "../models/SearchStatus";

function SearchMovies(
  input: String,
  setSearchState: SetterOrUpdater<SearchStatus | Movie[]>
) {
  setSearchState(SearchStatus.Loading);

  axios
    .get("https://www.omdbapi.com/", {
      params: {
        apikey: "191b7b3d",
        type: "movie",
        s: input,
      },
    })
    .then(function (response) {
      if (response.data.Response === "False") {
        switch (response.data.Error) {
          case "Too many results": {
            setSearchState(SearchStatus.TooManyResults);
            break;
          }
          case "Movie not found!": {
            setSearchState(SearchStatus.NoResults);
            break;
          }
          case "Incorrect IMDb ID.": {
            setSearchState(SearchStatus.NoSearch);
            break;
          }
        }
      } else {
        setSearchState(response.data.Search);
      }
    })
    .catch(function (error) {
      setSearchState(SearchStatus.Error);
      console.log(error);
    });
}

export default SearchMovies;

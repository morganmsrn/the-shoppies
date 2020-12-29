import axios from "axios";
import { SetterOrUpdater } from "recoil";
import { Movie } from "../models/Movie";
import { SearchStatus } from "../models/SearchStatus";

export const SearchMovies = (
  input: String,
  setSearchState: SetterOrUpdater<SearchStatus | Movie[]>
) => {
  setSearchState(SearchStatus.Loading);

  axios
    .get("https://www.omdbapi.com/", {
      params: {
        apikey: process.env.REACT_APP_API_KEY,
        type: "movie",
        s: input,
      },
    })
    .then(function (response) {
      if (response.data.Response === "False") {
        switch (response.data.Error) {
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
};

import { atom } from "recoil";
import Movie from "../models/Movie";
import SearchStatus from "../models/SearchStatus";

const movieSearchState = atom<SearchStatus | Movie[]>({
  key: "MovieSearch",
  default: SearchStatus.NoSearch,
});

export default movieSearchState;

import { Search } from "react-bootstrap-icons";
import { useSetRecoilState } from "recoil";
import { movieSearchState } from "../atoms/movieSearchState";
import { SearchMovies } from "../functions/SearchMovies";

export const SearchBar = () => {
  const setSearchState = useSetRecoilState(movieSearchState);

  return (
    <div className="mx-8">
      <div className="flex items-center max-w-lg px-6 py-3 mx-auto -mt-10 shadow-2xl bg-gray-100 rounded">
        <input
          id="search"
          onChange={(e) => SearchMovies(e.target.value, setSearchState)}
          placeholder="Movies"
          className="flex-grow bg-transparent text-2xl"
        />
        <Search className="fill-current text-gray-300 text-xl" />
      </div>
    </div>
  );
};

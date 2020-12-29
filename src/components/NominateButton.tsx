import { Star, StarFill } from "react-bootstrap-icons";
import { useRecoilState } from "recoil";
import { nominationListState } from "../atoms/nominationListState";
import { Movie } from "../models/Movie";

const [nominationList, setNominationList] = useRecoilState(nominationListState);

const isNominated = (movie: Movie) =>
  nominationList.some((m) => m.imdbID === movie.imdbID);

const list = [...nominationList];

const nominate = (b: boolean, movie: Movie) => {
  list.push(movie);
  b
    ? setNominationList(list)
    : setNominationList(
        nominationList.filter((m) => m.imdbID !== movie.imdbID)
      );
};

export const NominateButton: React.FC<{ movie: Movie }> = ({ movie }) =>
  isNominated(movie) ? (
    <button
      onClick={() => nominate(false, movie)}
      className="flex items-center py-1 px-3 rounded bg-blue-500 text-gray-100 font-medium text-xl shadow-lg"
    >
      <StarFill className="mr-2" />
      SELECTED
    </button>
  ) : (
    <button
      onClick={() => nominate(true, movie)}
      className="flex items-center py-1 px-3 rounded bg-yellow-500 text-gray-100 font-medium text-xl shadow-lg"
    >
      <Star className="mr-2" />
      ADD
    </button>
  );

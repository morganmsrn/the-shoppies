import { Star, StarFill } from "react-bootstrap-icons";
import { useRecoilState } from "recoil";
import { nominationListState } from "../atoms/nominationListState";
import { Movie } from "../models/Movie";

/**  This button can add or remove a movie in the nomination list
 * and has variants depending on the movie status
 */

export const NominateButton: React.FC<{ movie: Movie }> = ({ movie }) => {
  const [nominationList, setNominationList] = useRecoilState(
    nominationListState
  );

  const isNominated = () =>
    nominationList.some((m) => m.imdbID === movie.imdbID);

  const list = [...nominationList];

  const nominate = (b: boolean) => () => {
    list.push(movie);
    b
      ? setNominationList(list)
      : setNominationList(
          nominationList.filter((m) => m.imdbID !== movie.imdbID)
        );
  };

  if (isNominated()) {
    return (
      <button
        onClick={nominate(false)}
        className="flex items-center py-1 px-3 rounded bg-blue-500 text-gray-100 font-medium text-xl shadow-lg"
      >
        <StarFill className="mr-2" />
        SELECTED
      </button>
    );
  } else {
    return (
      <button
        onClick={nominate(true)}
        className="flex items-center py-1 px-3 rounded bg-yellow-500 text-gray-100 font-medium text-xl shadow-lg"
      >
        <Star className="mr-2" />
        ADD
      </button>
    );
  }
};

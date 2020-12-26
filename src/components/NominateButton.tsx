import { Star, StarFill } from "react-bootstrap-icons";
import { useRecoilState } from "recoil";
import nominationListState from "../atoms/nominationListState";

function NominateButton(props: any) {
  const [nominationList, setNominationList] = useRecoilState(
    nominationListState
  );

  function nominate(b: boolean) {
    if (b) {
      let list = [...nominationList];
      list.push(props.movie);
      setNominationList(list);
    } else {
      setNominationList(
        nominationList.filter((movie) => movie.imdbID !== props.movie.imdbID)
      );
    }
  }

  if (nominationList.some((movie) => movie.imdbID === props.movie.imdbID)) {
    return (
      <button
        onClick={() => nominate(false)}
        className="flex items-center py-1 px-3 rounded bg-blue-500 text-gray-100 font-medium text-xl shadow-lg"
      >
        <StarFill className="mr-2" />
        SELECTED
      </button>
    );
  } else {
    return (
      <button
        onClick={() => nominate(true)}
        className="flex items-center py-1 px-3 rounded bg-yellow-500 text-gray-100 font-medium text-xl shadow-lg"
      >
        <Star className="mr-2" />
        ADD
      </button>
    );
  }
}

export default NominateButton;

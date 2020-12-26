import { useRecoilValue } from "recoil";
import nominationListState from "../atoms/nominationListState";
import RemoveNominationBtn from "./RemoveNominationBtn";

function NominationList(props: any) {
  const nominationList = useRecoilValue(nominationListState);

  if (props.isVisible && nominationList.length !== 0) {
    return (
      <div className="p-2">
        <hr className="border-gray-800"/>
        <ul className="text-lg text-gray-200">
          {nominationList.map((movie) => (
            <li key={movie.imdbID} className="flex flex-row-reverse items-center py-2 mr-3">
              <RemoveNominationBtn movie={movie} />
              <span className="mx-4">{movie.Title}</span>
              <span className="text-gray-500">{movie.Year}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default NominationList;

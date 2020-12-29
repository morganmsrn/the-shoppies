import { useState } from "react";
import { BookmarkX } from "react-bootstrap-icons";
import { useRecoilState } from "recoil";
import { nominationListState } from "../atoms/nominationListState";
import { Movie } from "../models/Movie";

const [isClicked, setisClicked] = useState(false);
const [nominationList, setNominationList] = useRecoilState(nominationListState);

const onClick = (movie: Movie) => () => {
  setNominationList(nominationList.filter((m) => m != movie));
};

document.body.addEventListener("mouseleave", () => setisClicked(false), true);

export const RemoveNominationBtn: React.FC<{ movie: Movie }> = ({ movie }) =>
  isClicked ? (
    <button
      onClick={onClick(movie)}
      className=" px-3 rounded bg-red-500 text-gray-100 font-medium  shadow-lg"
    >
      REMOVE
    </button>
  ) : (
    <button>
      <BookmarkX
        onClick={() => setisClicked(true)}
        className="text-2xl text-red-500"
      />
    </button>
  );

import { useEffect, useState } from "react";
import { BookmarkX } from "react-bootstrap-icons";
import { useRecoilState } from "recoil";
import { nominationListState } from "../atoms/nominationListState";
import { Movie } from "../models/Movie";

/** This button needs to be clicked twice in order to be sure
 * the user really wants to delete the item
 * If the user puts their mouse elsewhere on the page, the delete action is cancelled (useEffect)
 */

export const RemoveNominationBtn: React.FC<{ movie: Movie }> = ({ movie }) => {
  const [isClicked, setisClicked] = useState(false);
  const [nominationList, setNominationList] = useRecoilState(
    nominationListState
  );

  const onClick = (movie: Movie) => () => {
    setNominationList(nominationList.filter((m) => m !== movie));
  };

  useEffect(() => {
    document.body.addEventListener(
      "mouseleave",
      () => setisClicked(false),
      true
    );
  });

  if (isClicked) {
    return (
      <button
        onClick={onClick(movie)}
        className=" px-3 rounded bg-red-500 text-gray-100 font-medium  shadow-lg"
      >
        REMOVE
      </button>
    );
  } else {
    return (
      <button>
        <BookmarkX
          onClick={() => setisClicked(true)}
          className="text-2xl text-red-500"
        />
      </button>
    );
  }
};

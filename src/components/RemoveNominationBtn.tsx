import { useState } from "react";
import { BookmarkX } from "react-bootstrap-icons";
import { useRecoilState } from "recoil";
import nominationListState from "../atoms/nominationListState";

function RemoveNominationBtn(props: any) {
  const [isClicked, setisClicked] = useState(false);
  const [nominationList, setNominationList] = useRecoilState(
    nominationListState
  );

  document.body.addEventListener("mouseleave", () => setisClicked(false), true);

  if (isClicked) {
    return (
      <button
        onClick={() =>
          setNominationList(
            nominationList.filter((movie) => movie !== props.movie)
          )
        }
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
}

export default RemoveNominationBtn;

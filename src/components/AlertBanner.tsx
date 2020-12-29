import { XCircle } from "react-bootstrap-icons";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { nominationListState } from "../atoms/nominationListState";

const nominationList = useRecoilValue(nominationListState);
const [isVisible, setIsVisible] = useState(true);

if (!isVisible && nominationList.length !== 5) {
  setIsVisible(true);
}

export const AlertBanner = () =>
  nominationList.length === 5 && isVisible ? (
    <div className="sticky top-0 z-10 w-full flex items-center bg-blue-500 px-8 py-2 text-gray-200 font-medium">
      <div>
        <span>5 movies selected : </span>
        <span className="font-bold">You are done !</span>
      </div>
      <div className="flex-grow"></div>
      <button onClick={() => setIsVisible(false)}>
        <XCircle />
      </button>
    </div>
  ) : (
    <div />
  );

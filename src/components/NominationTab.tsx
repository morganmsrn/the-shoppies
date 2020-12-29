import { useState } from "react";
import { useRecoilValue } from "recoil";
import { nominationListState } from "../atoms/nominationListState";
import { NominationList } from "./NominationList";
import { NominationTabIcon } from "./NominationTabIcon";

const [isVisible, setisVisible] = useState(false);
const numberOfNominations = useRecoilValue(nominationListState).length;
const onClick = () => (isVisible ? setisVisible(false) : setisVisible(true));

export const NominationTab = () => (
  <div className="fixed w-full md:w-96 md:right-10 bottom-0 bg-gray-900 p-3 md:rounded-t-lg">
    <div className="text-gray-100 text-xl font-medium mx-4">
      <button onClick={onClick} className="w-full flex items-center">
        <span className="text-gray-500">{numberOfNominations} / 5</span>
        <div className="flex-grow"></div>
        <span className="mr-4">NOMINATION LIST</span>
        <div className="mr-2">
          <NominationTabIcon isVisible={isVisible} />
        </div>
      </button>
    </div>
    <NominationList isVisible={isVisible} />
  </div>
);

import { useState } from "react";
import { useRecoilValue } from "recoil";
import nominationListState from "../atoms/nominationListState";
import NominationList from "./NominationList";
import NominationTabIcon from "./NominationTabIcon";

function NominationTab() {
  const [isVisible, setisVisible] = useState(false);
  const numberOfNominations = useRecoilValue(nominationListState).length;

  function onClick() {
    if (isVisible) {
      setisVisible(false);
    } else {
      setisVisible(true);
    }
  }

  return (
    <div className="fixed w-full bottom-0 bg-gray-900 p-2">
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
}

export default NominationTab;

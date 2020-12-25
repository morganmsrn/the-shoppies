import { useState } from "react";
import NominationList from "./NominationList";
import NominationTabIcon from "./NominationTabIcon";

function NominationTab() {
  const [isVisible, setisVisible] = useState(false);

  function onClick() {
    if (isVisible) {
      setisVisible(false);
    } else {
      setisVisible(true);
    }
  }

  return (
    <div className="fixed w-screen bottom-0 bg-gray-900 p-2">
      <div className="flex flex-row-reverse text-gray-100 text-xl font-medium">
        <button
          onClick={onClick}
          className="w-full flex flex-row-reverse items-center"
        >
          <div className="pr-6 pl-4">
            <NominationTabIcon isVisible={isVisible} />
          </div>
          NOMINATION LIST
        </button>
      </div>
      <NominationList isVisible={isVisible} />
    </div>
  );
}

export default NominationTab;

import { CaretUpSquare } from "react-bootstrap-icons";

function NominationList() {
  return (
    <div className="fixed w-screen bottom-0 bg-gray-900 p-2">
      <div className="flex flex-row-reverse items-center text-gray-100 text-xl font-medium">
        <CaretUpSquare className="mr-6 ml-3" /> NOMINATION LIST
      </div>
    </div>
  );
}

export default NominationList;

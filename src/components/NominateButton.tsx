import { Star } from "react-bootstrap-icons";

function NominateButton(props: any) {
  return (
    <button className="flex items-center py-1 px-3 rounded bg-yellow-500 text-gray-100 font-medium text-xl shadow-lg">
      <Star className="mr-2"/>
      ADD
    </button>
  );
}

export default NominateButton;

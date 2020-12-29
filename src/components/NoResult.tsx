import { ThreeDots } from "react-bootstrap-icons";
import { SearchStatus } from "../models/SearchStatus";

export const NoResult: React.FC<{ search: SearchStatus }> = ({ search }) => {
  switch (search) {
    case SearchStatus.Error: {
      return (
        <div className="m-auto mt-40 text-4xl text-gray-900">
          <p>Error !</p>
          <p>Movie database unreachable.</p>
        </div>
      );
    }
    case SearchStatus.Loading: {
      return (
        <ThreeDots className="animate-pulse m-auto mt-40 text-4xl text-gray-900" />
      );
    }
    case SearchStatus.NoResults: {
      return (
        <p className="mt-40 text-center text-2xl text-gray-900">
          No results found.
        </p>
      );
    }
    case SearchStatus.NoSearch: {
      return (
        <p className="mt-40 text-center text-2xl text-gray-900">
          Search movies and add 5 to your nomination list.
        </p>
      );
    }
    default: {
      return <div />;
    }
  }
};

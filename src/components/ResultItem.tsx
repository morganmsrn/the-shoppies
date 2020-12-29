import { NominateButton } from "./NominateButton";
import { Movie } from "../models/Movie";

export const ResultItem: React.FC<{ movie: Movie }> = ({ movie }) => (
  <div className="flex w-96 relative m-3 h-40 bg-gray-100 rounded shadow-lg">
    <img src={movie.Poster} alt="poster" width="100" className="rounded-l" />
    <div className="pl-6 pt-5">
      <h2 className="text-3xl text-gray-900">{movie.Title}</h2>
      <h3 className="text-lg text-gray-600">{movie.Year}</h3>
    </div>
    <div className="absolute right-4 bottom-4">
      <NominateButton movie={movie} />
    </div>
  </div>
);

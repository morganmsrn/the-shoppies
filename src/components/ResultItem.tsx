import NominateButton from "./NominateButton";

function ResultItem(props: any) {
  return (
    <div className="flex relative my-4 h-40 bg-gray-100 rounded shadow-lg">
      <img
        src={props.movie.Poster}
        alt="poster"
        width="100"
        className="rounded-l"
      />
      <div className="pl-6 pt-5">
        <h2 className="text-3xl text-gray-900">{props.movie.Title}</h2>
        <h3 className="text-lg text-gray-600">{props.movie.Year}</h3>
      </div>
      <div className="absolute right-4 bottom-4">
        <NominateButton movie={props.movie.imdbID} />
      </div>
    </div>
  );
}

export default ResultItem;

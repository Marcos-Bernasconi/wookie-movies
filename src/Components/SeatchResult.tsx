export function SearchResult({ foundMovies, state }: any) {
  let results;
  // console.log(state);
  if (foundMovies != null && state == true) {
    results = foundMovies.map((movie: any) => {
      // console.log(movie);
      return (
        <li className=" cursor-pointer p-2 hover:bg-neutral-100" key={movie.id}>
          {movie.title}
        </li>
      );
    });
  }
  // console.log(results);
  return (
    <>
      <div className="absolute max-w-[8rem] rounded-lg bg-white p-2 ">
        <ul className="flex max-h-[10rem] flex-col divide-y-2 divide-neutral-100 overflow-y-auto ">
          {results}
        </ul>
      </div>
    </>
  );
}

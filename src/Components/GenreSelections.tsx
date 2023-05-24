import { Movie } from "../Components/Movie";

export function GenreSections({ genres }: any) {
  return (
    <>
      {Object.entries(genres).map((genre: any) => (
        <section className="mt-16  w-screen overflow-hidden" key={genre[0]}>
          <h2 className="ml-4 text-2xl font-semibold text-neutral-700">
            {genre[0]}
          </h2>
          <div className="mt-4 flex  flex-row gap-4 overflow-auto px-4 md:gap-12">
            {genre[1].map((movie: any) => {
              return <Movie imageUrl={movie.url} key={movie.id} />;
            })}
          </div>
        </section>
      ))}
    </>
  );
}

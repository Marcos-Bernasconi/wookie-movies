export function MovieDescription({ movie }: any) {
  const date = movie.released_on.split("-")[0];
  return (
    <>
      <section className="mx-auto max-w-[100rem] flex-row items-center pt-8 lg:flex ">
        <div className="mx-auto h-[20rem] w-[14rem] overflow-hidden rounded-xl border-2 border-neutral-200 bg-white  lg:mx-[10%]">
          <img
            className="h-full w-full object-cover"
            src={movie.poster}
            alt="poster"
          />
        </div>
        <div className="flex-grow bg-white lg:rounded-tl-lg">
          <div className="mx-auto mt-6 max-w-[40rem] bg-white px-8 pb-8 pt-4  lg:mx-[2rem]">
            <div className="flex flex-row items-center gap-4 ">
              <p className="text-3xl font-semibold">{movie.title}</p>
              <p className="rounded-lg border-[1px] bg-neutral-50 px-1 py-2 font-semibold text-neutral-500">
                {movie.imdb_rating}+/10
              </p>
            </div>
            <div>
              <div className="mt-2 flex flex-row divide-x-2 divide-neutral-200">
                <p className="px-2 text-neutral-500">{date}</p>
                <p className="px-2 text-neutral-500">{movie.length}</p>
                <p className="px-2 text-neutral-500">★★★★★</p>
              </div>
              <ul className="mt-8 flex flex-row gap-3">
                Directors:
                {movie.director.isArray ? (
                  movie.director.map((directorName: string) => {
                    return (
                      <li
                        className="underline underline-offset-1 "
                        key={directorName}
                      >
                        {directorName}
                      </li>
                    );
                  })
                ) : (
                  <li className="underline underline-offset-1 ">
                    {movie.director}
                  </li>
                )}
              </ul>
              <div className="mt-6 flex flex-row items-center gap-3">
                Cast:
                <ul className=" flex flex-row items-start gap-2 overflow-auto">
                  {movie.cast.map((castName: string) => {
                    return (
                      <li
                        className="whitespace-nowrap rounded-md border-[1px] border-neutral-200 bg-neutral-50 px-2 py-1 italic text-neutral-600"
                        key={castName}
                      >
                        {castName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <p className="mt-8 text-neutral-500">{movie.overview}</p>
            <div className="flex flex-row gap-6">
              <button className="mt-12 flex flex-row items-center gap-3 rounded-lg bg-black px-4 py-2 text-xl font-semibold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M32.16 16.08L8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z"
                    className="clr-i-solid clr-i-solid-path-1"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>{" "}
                Play
              </button>
              <button className="mt-12 flex flex-row items-center gap-3 rounded-lg border-[1px] border-neutral-200 bg-neutral-50 px-4 py-2 text-xl font-semibold text-neutral-500">
                More Info
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { GenreSections } from "@/Components/GenreSelections";

export default function Home() {
  const [moviesInformation, setMoviesInformation] = useState();
  const [moviesGroupedByGenre, setMoviesGroupedByGenre] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/movies")
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        setMoviesInformation(movies);
      });
  }, []);

  useEffect(() => {
    if (moviesInformation != null) {
      const groupedMovies = groupByGenre(moviesInformation);
      setMoviesGroupedByGenre(groupedMovies);
    }
  }, [moviesInformation]);

  return (
    <>
      <main className="  w-screen  bg-neutral-200 ">
        <Navbar />
        {moviesGroupedByGenre ? (
          <GenreSections genres={moviesGroupedByGenre} />
        ) : (
          <>
            <section className="mt-16  w-screen animate-pulse overflow-hidden">
              <h2 className="ml-4 text-2xl font-semibold text-neutral-700">
                Loading Genre...
              </h2>
              {/* Movies */}
              <div className="mt-4 flex  flex-row gap-4 overflow-auto px-4 md:gap-12">
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
              </div>
            </section>{" "}
            <section className="mt-16  w-screen animate-pulse overflow-hidden">
              <h2 className="ml-4 text-2xl font-semibold text-neutral-700">
                Loading Genre...
              </h2>
              {/* Movies */}
              <div className="mt-4 flex  flex-row gap-4 overflow-auto px-4 md:gap-12">
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
              </div>
            </section>
            <section className="mt-16  w-screen animate-pulse overflow-hidden">
              <h2 className="ml-4 text-2xl font-semibold text-neutral-700">
                Loading Genre...
              </h2>
              {/* Movies */}
              <div className="mt-4 flex  flex-row gap-4 overflow-auto px-4 md:gap-12">
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
              </div>
            </section>
            <section className="mt-16  w-screen animate-pulse overflow-hidden">
              <h2 className="ml-4 text-2xl font-semibold text-neutral-700">
                Loading Genre...
              </h2>
              {/* Movies */}
              <div className="mt-4 flex  flex-row gap-4 overflow-auto px-4 md:gap-12">
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
                <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] "></div>
              </div>
            </section>
          </>
        )}

        <Footer />
      </main>
    </>
  );
}

type movieInfoNeeded = {
  id: number;
  url: string;
  title: string;
};

function groupByGenre(fetchedData: any) {
  const movieList = fetchedData;
  let groupGenre: any = {};
  for (let movie of movieList.movies) {
    for (let genre of movie.genres) {
      if (groupGenre[genre] != undefined) {
        groupGenre[genre].push({
          id: movie.id,
          url: movie.backdrop,
          title: movie.title,
        });
      } else {
        groupGenre[genre] = [
          { id: movie.id, url: movie.backdrop, title: movie.title },
        ];
      }
    }
  }
  // console.log(groupGenre);
  return groupGenre;
}

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
      <main className=" min-h-screen w-screen  bg-neutral-200 pb-16">
        <nav className="sticky top-0 z-10 flex flex-row items-center  justify-start bg-white p-4 md:px-16">
          <h1 className="hidden cursor-pointer text-xl font-bold tracking-wide text-black md:block ">
            Wookie Movies
          </h1>
          <h1 className=" cursor-pointer text-xl font-bold tracking-wide text-black md:hidden">
            Wk Movies
          </h1>

          <ul className="mx-auto hidden flex-grow-0 flex-row gap-12 lg:flex">
            <li className="cursor-pointer text-neutral-500 hover:text-neutral-800">
              Home
            </li>
            <li className="cursor-pointer text-neutral-500 hover:text-neutral-800">
              TV Shows
            </li>
            <li className="cursor-pointer text-neutral-500 hover:text-neutral-800">
              Movies
            </li>
            <li className="cursor-pointer text-neutral-500 hover:text-neutral-800">
              My List
            </li>
          </ul>

          <SearchInput />
        </nav>
        {moviesGroupedByGenre && (
          <GenreSections genres={moviesGroupedByGenre} />
        )}

        {/* <section className="mt-16 w-screen overflow-hidden">
          <h2 className="ml-4 text-2xl font-semibold text-neutral-700">
            Category Name
          </h2>
          <div className="mt-4 flex  flex-row gap-4 overflow-auto px-4">
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
          </div>
        </section> */}
      </main>

      <footer className=" bg-white px-8 pb-16 pt-8">
        <h3 className="text-lg font-semibold text-black">Wookie Movies</h3>
        <p className="text-sm text-neutral-500">
          Copyright © 2023 Wookie Movies
        </p>
      </footer>
    </>
  );
}

type url = {
  imageUrl: string;
};

function Movie({ imageUrl }: url) {
  return (
    <>
      <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-white shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] ">
        <img
          className="h-full object-cover"
          src={imageUrl}
          alt="Movie Thumbnail"
        />
      </div>
    </>
  );
}

function GenreSections({ genres }: any) {
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

function SearchInput() {
  const [foundMovies, setFoundMovies] = useState();
  const [inputText, setInputText] = useState("");
  const [menuState, setMenuState] = useState(false);
  const input: any = useRef();

  useEffect(() => {
    console.log(inputText);
    fetch("http://localhost:3000/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: inputText }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.movies);
        setFoundMovies(res.movies);
      })
      .catch((e) => {
        //Handle error
        console.log(e.message);
      });
  }, [inputText]);

  return (
    <div className="relative ml-auto flex-grow-0 lg:m-0">
      <div className="flex rounded-md border-2 border-neutral-200 bg-neutral-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-neutral-500"
        >
          <path
            fill="currentColor"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
          />
        </svg>

        <input
          onChange={() => {
            setInputText(input.current.value);
          }}
          onFocus={() => {
            setMenuState(true);
            console.log("focused" + menuState);
          }}
          onBlur={() => {
            setMenuState(false);
            console.log("blurred" + menuState);
          }}
          placeholder="Search"
          type="text"
          ref={input}
          className="max-w-[8rem] px-2 text-neutral-500 outline-0 md:max-w-[12rem]"
        />
      </div>

      <SearchResult foundMovies={foundMovies} state={menuState} />
    </div>
  );
}

function SearchResult({ foundMovies, state }: any) {
  let results;
  console.log(state);
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

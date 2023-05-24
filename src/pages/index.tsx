import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { GenreSections } from "@/Components/GenreSections";
import { LoadAnimation } from "@/Components/LoadAnimation";

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
      <main className=" w-screen  bg-neutral-200  ">
        <Navbar />
        {moviesGroupedByGenre ? (
          <GenreSections genres={moviesGroupedByGenre} />
        ) : (
          <LoadAnimation />
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
          slug: movie.slug,
        });
      } else {
        groupGenre[genre] = [
          {
            id: movie.id,
            url: movie.backdrop,
            title: movie.title,
            slug: movie.slug,
          },
        ];
      }
    }
  }
  // console.log(groupGenre);
  return groupGenre;
}

import { useState, useEffect } from "react";

//Importing all the Components
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { GenreSections } from "@/Components/GenreSections";
import { LoadAnimation } from "@/Components/LoadAnimation";

import { moviesData, movie } from "../types/types";
export default function Home() {
  //store the data of the Movies (get it from the API)
  const [moviesInformation, setMoviesInformation] = useState();

  //store the Movies grouped by Genre
  const [moviesGroupedByGenre, setMoviesGroupedByGenre] = useState<{
    [genre: string]: movie[];
  }>();

  //fetch the movies data from the Movies Api endpoint
  useEffect(() => {
    fetch("/api/movies")
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        //save Movies in the state
        setMoviesInformation(movies);
      });
  }, []);

  //After fetching the movies we Group them by Genre
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
        {/* If the movies are Grouped we display them; otherwise we display the Loading*/}
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

// Function to group movies by genre
function groupByGenre(fetchedData: moviesData) {
  // Store fetched data in a variable
  const movieList = fetchedData;

  // Create an empty object to store grouped movies by genre
  let groupGenre: { [genre: string]: movie[] } = {};

  // Loop through each movie in the fetched data
  for (let movie of movieList.movies) {
    if (movie.genres != undefined) {
      // Loop through each genre of the movie
      for (let genre of movie.genres) {
        // If genre is already in the grouped object, add movie to the existing genre array
        if (groupGenre[genre] != undefined) {
          groupGenre[genre].push({
            id: movie.id,
            url: movie.backdrop,
            title: movie.title,
            slug: movie.slug,
          });

          // If genre is not in the grouped object, create a new genre key with an array of the movie details
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
  }
  // console.log(groupGenre);
  return groupGenre;
}

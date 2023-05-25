import { FC } from "react";

import { Movie } from "./Movie";
import { movie } from "../types/types";

type Props = {
  genres: { [genre: string]: movie[] };
};

//This component create the name of the Genre and all the Images of movies
//Receive the prop genres; and it's an object with the Genre name and the array of Movies
//Example value: {Action: [], Drama: [], Adeventure: []};
export const GenreSections: FC<Props> = ({ genres }) => {
  return (
    //Object.entries transform Object into an Array of [key, value] pairs
    //This -> {name: 'John Doe'} to This -> [name, 'John Doe']
    <>
      {Object.entries(genres).map((genre) => (
        <section className="mt-16  w-screen overflow-hidden" key={genre[0]}>
          <h2 className="ml-4 text-2xl font-semibold text-neutral-700">
            {genre[0]}
          </h2>
          <div className="mt-4 flex  flex-row gap-4 overflow-auto px-4 md:gap-12">
            {genre[1].map((movie) => {
              return <Movie url={movie.url} key={movie.id} slug={movie.slug} />;
            })}
          </div>
        </section>
      ))}
    </>
  );
};

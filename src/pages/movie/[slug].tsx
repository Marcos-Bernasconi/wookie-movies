import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/Components/Navbar";
import { Footer } from "../../Components/Footer";
import { MovieDescription } from "../../Components/MovieDescription";
import { useRouter } from "next/router";

export async function getServerSideProps(context: any) {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer Wookie2021");
  myHeaders.append("Content-Type", "application/json");
  const { slug } = context.params;
  try {
    const result = await fetch(`https://wookie.codesubmit.io/movies/${slug}`, {
      method: "GET",
      headers: myHeaders,
    });
    const movie = await result.json();

    return { props: movie };
  } catch (error) {
    const movie = { problem: "Not Found" };
    console.error(`Error fetching movie data for "${slug}": ${error}`);
    return { props: movie };
  }
}

export default function Home(movie: any) {
  const [movieInformation, setMovieInformation] = useState(movie);

  // console.log(movie);

  return (
    <>
      <Navbar />

      <main className=" w-screen  bg-neutral-200 ">
        {movie.problem == undefined ? (
          <MovieDescription movie={movie} />
        ) : (
          <h2 className="mx-auto mt-[10rem] px-8 text-3xl leading-relaxed">
            Ops, maybe the page that you're searching doesn' exist :(
          </h2>
        )}
      </main>
      <hr className="lg:hidden" />
      <div className="b-0 absolute w-full">
        <Footer />
      </div>
    </>
  );
}

import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/Components/Navbar";
import { Footer } from "../Components/Footer";
export default function Home() {
  const [moviesInformation, setMoviesInformation] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/movies")
      .then((response) => {
        return response.json();
      })
      .then((movies) => {
        setMoviesInformation(movies);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main className=" min-h-screen w-screen  bg-neutral-200 ">
        <section className="pt-8">
          <div className=" mx-auto h-[20rem] w-[14rem] rounded-xl  border-2 border-neutral-200 bg-white"></div>
          <div className="mt-6 bg-white px-8 pt-4">
            <div className="flex flex-row items-baseline gap-4 ">
              <p className="text-3xl font-semibold">
                Spider-Man: Into the Spider-Verse
              </p>
              <p className="rounded-lg border-[1px] bg-neutral-50 px-1 py-2 font-semibold text-neutral-500">
                9/10
              </p>
            </div>
            <div>
              <div className="mt-2 flex flex-row divide-x-2 divide-neutral-200">
                <p className="px-2 text-neutral-500">2018</p>
                <p className="px-2 text-neutral-500">2h 29min</p>
                <p className="px-2 text-neutral-500">★★★★★</p>
              </div>
              <ul className="mt-4 flex flex-row gap-3">
                Directors:
                <li className="underline underline-offset-1 ">Anthony Russo</li>
                <li className="underline underline-offset-1 ">Joe Russo</li>
              </ul>

              <div className="mt-4 flex flex-row items-center gap-3">
                Cast:
                <ul className=" flex flex-row items-start gap-2 overflow-auto">
                  <li className="whitespace-nowrap rounded-md border-[1px] border-neutral-200 bg-neutral-50 px-2 py-1 italic text-neutral-600">
                    Shameik Moore
                  </li>
                  <li className="whitespace-nowrap rounded-md border-[1px] border-neutral-200 bg-neutral-50 px-2 py-1 italic text-neutral-600">
                    Jake Johnson
                  </li>
                  <li className="whitespace-nowrap rounded-md border-[1px] border-neutral-200 bg-neutral-50 px-2 py-1 italic text-neutral-600">
                    Hailee Steinfeld
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-neutral-500">
              Miles Morales is juggling his life between being a high school
              student and being a spider-man. When Wilson \"Kingpin\" Fisk uses
              a super collider, others from across the Spider-Verse are
              transported to this dimension.
            </p>
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
        </section>
      </main>
      <Footer />
    </>
  );
}

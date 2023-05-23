import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen w-screen overflow-x-hidden bg-neutral-200 pb-16">
        <nav className="sticky top-0 flex flex-row justify-start  bg-white p-4">
          <h1 className=" text-xl font-bold tracking-wide text-black">
            Wookie
          </h1>
          <div className="ml-auto">
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
                type="text"
                className="max-w-[7rem] px-2 text-neutral-500 outline-0"
              />
            </div>
          </div>
        </nav>

        <section className="mt-16 w-screen overflow-hidden">
          <h2 className="ml-4 text-2xl font-semibold text-neutral-700">
            Category Name
          </h2>
          <div className="mt-4 flex  flex-row gap-4 overflow-auto px-4">
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
          </div>
        </section>

        <section className="mt-16 w-screen overflow-hidden">
          <h2 className="ml-4 text-2xl font-semibold text-neutral-700">
            Category Name
          </h2>
          <div className="mt-4 flex  flex-row gap-4 overflow-auto px-4">
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
          </div>
        </section>

        <section className="mt-16 w-screen overflow-hidden">
          <h2 className="ml-4 text-2xl font-semibold text-neutral-700">
            Category Name
          </h2>
          <div className="mt-4 flex  flex-row gap-4 overflow-auto px-4">
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
            <div className="h-[10rem] w-[15rem] flex-shrink-0 rounded-lg border-2 border-neutral-200 bg-white"></div>
          </div>
        </section>
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

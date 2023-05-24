import { SearchInput } from "./SearchInput";

export function Navbar() {
  return (
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
  );
}

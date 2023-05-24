import { SearchInput } from "./SearchInput";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex flex-row items-center  justify-start bg-white p-4 md:px-16">
      <h1 className="hidden cursor-pointer text-xl font-bold tracking-wide text-black md:block ">
        <Link href="/">Wookie Movies</Link>
      </h1>
      <h1 className=" cursor-pointer text-xl font-bold tracking-wide text-black md:hidden">
        <Link href="/">WK Movies</Link>
      </h1>

      <ul className="mx-auto hidden flex-grow-0 flex-row gap-12 lg:flex">
        <li className="cursor-pointer text-neutral-500 hover:text-neutral-800">
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer text-neutral-500 hover:text-neutral-800">
          <Link href="/comingSoon"> TV Shows</Link>
        </li>
        <li className="cursor-pointer text-neutral-500 hover:text-neutral-800">
          <Link href="/comingSoon"> Movies</Link>
        </li>
        <li className="cursor-pointer text-neutral-500 hover:text-neutral-800">
          <Link href="/comingSoon"> My List </Link>
        </li>
      </ul>

      <SearchInput />
    </nav>
  );
}

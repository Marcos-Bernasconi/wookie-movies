import { SearchResult } from "./SeatchResult";
import { useState, useEffect, useRef } from "react";

import { movie } from "../types/types";

export function SearchInput() {
  const [foundMovies, setFoundMovies] = useState<movie[]>([]);
  const [inputText, setInputText] = useState("");
  const [menuState, setMenuState] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // console.log(inputText);
    fetch("/api/search", {
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
            setInputText(input.current?.value ?? "");
          }}
          onClick={() => {
            setMenuState(true);
            // console.log("focused" + menuState);
          }}
          placeholder="Search"
          type="text"
          ref={input}
          className="max-w-[8rem] px-2 text-neutral-500 outline-0 md:max-w-[12rem]"
        />

        <div
          className={menuState ? "text-neutral-500" : "invisible"}
          onClick={() => {
            setMenuState(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.4 14L12 13.4L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4L13.4 12l3.6 3.6l-1.4 1.4Z"
            />
          </svg>
        </div>
      </div>

      <SearchResult foundMovies={foundMovies} state={menuState} />
    </div>
  );
}

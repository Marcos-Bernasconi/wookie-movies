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
      <Footer />
    </>
  );
}

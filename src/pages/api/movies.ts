import type { NextApiRequest, NextApiResponse } from "next";
import { moviesData } from "../../types/types";

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Wookie2021");
myHeaders.append("Content-Type", "application/json");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<moviesData>
) {
  fetch("https://wookie.codesubmit.io/movies", {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => res.status(200).json(response))
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json({
        movies: [
          {
            error: "Internal Server error",
          },
        ],
      });
    });
}

import type { NextApiRequest, NextApiResponse } from "next";
import { moviesData } from "../../types/types";

//Preparing the headers necessary to fetch the Data
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Wookie2021");
myHeaders.append("Content-Type", "application/json");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<moviesData>
) {
  //use the data sended by the user to make the API request
  const { query } = req.body;
  console.log(query);
  fetch(`https://wookie.codesubmit.io/movies?q=${query}`, {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      //if everything is good then send back the json Data
      res.status(200).json(response);
    })
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

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string
// }

const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer Wookie2021");
myHeaders.append("Content-Type", "application/json");

export default function handler(
  req: NextApiRequest,
  res: any // res: NextApiResponse<Data>
) {
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
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("Internal Server error");
    });
}

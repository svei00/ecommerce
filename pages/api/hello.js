// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// TypeScript way:

// import { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//     name: string;
// };

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
//     ) {
//         res.status(200).json({name: 'Ivn E. Villanueva'});
// };
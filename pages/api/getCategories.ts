// All the files inside the api folder in NextJS is backend, and the outside one is FrontEnd
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    categories: Category[];             // It Could be [Category] too.
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
        // const categories = await sanityClient.fetch(query);
};
  
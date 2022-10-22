// All the files inside the api folder in NextJS is backend, and the outside one is FrontEnd
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity'

const query = groq `*[_type == 'category'] {
    _id,
    ...
}`;

type Data = {
    categories: Category[];             // It Could be [Category] too.
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
        const categories = await sanityClient.fetch(query);
        console.log(categories);
        res.status(200).json({ categories });
};
  
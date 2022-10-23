// All the files inside the api folder in NextJS is backend, and the outside one is FrontEnd
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity'

const query = groq `*[_type == 'product'] {
    _id,
    ...
} | order(_createdAt asc)`;             // Ordening data from create at date

type Data = {
    products: Product[];             // It Could be [Category] too.
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
        const products: Product[] = await sanityClient.fetch(query);
        console.log(products);
        res.status(200).json({ products });
};
  
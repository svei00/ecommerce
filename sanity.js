import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

// Remember all the PUBLIC ones are for public

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    token: process.env.SANITY_API_TOKEN,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2022-10-19', // Learn more: http://www.sanity.io/docs/api-versioning
    useCdn: process.env.NODE_ENV === 'production',
}

// Setting up the client for fetching data in the getProps file
export const sanityClient = createClient(config);

// Setting up the helper function for generating Image URL
// https://www.sanity.io/docs/image-url
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

const client = sanityClient({
    projectId: process.env.projectID,
    dataset: 'your dataset',
    token: 'Sanity build token',
    apiVersion: 'v1',
    useCdn: false // `false` if you want to ensure fresh data
  })
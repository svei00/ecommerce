import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { urlFor } from "../../sanity";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: "2022-08-01",

});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const items: Product[] = req.body.items;

        // This is the shape stripe spects the data
        const transformItems = items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.title,
                    images: [urlFor(item.image[0]).url],
                },
                unit_amount: item.price * 100,
            },
            quantity: 1,
        }));

        try {
            // Create Checkout Sessions from body params
            const params: Stripe.Checkout.SessionCreateParams = {
                payment_method_types: ['card'],
                shipping_address_collection: {
                    allowed_countries: [
                        "US",
                        "CA",
                        "GB",
                        "MX"
                    ],
                    line_items: transformItems,
                    payment_intent_data: {},


                }
            }
        }
    }
};
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button';
import CheckoutProducts from '../components/CheckoutProducts';
import Header from '../components/Header'
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice';
import Currency from 'react-currency-format';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Stripe from 'stripe';
import { fetchPostJSON } from '../assets/js/api-helpers';
import getStripe from '../assets/js/get-Stripejs';

function Checkout() {

    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const router = useRouter();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
        {} as { [key: string]: Product[] }
    );

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item._id] = results[item._id] || []).push(item);
            return results;
        }, {} as { [key:string]: Product[] });

         setGroupedItemsInBasket(groupedItems);
    }, [items]);

    const createCheckoutSession = async () => {
        setLoading(true);

        const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
            '/api/checkout_sessions', 
            {
                items:items,
            }
        );

        // Internal Server Error
        if ((checkoutSession as any).statusCode === 500) {
            console.error((checkoutSession as any).message);
            return;
        }

        // Redirect to checkout
        const stripe = await getStripe();
    };

  return (
    <div className='min-h-screen overflow-hidden bg-[#fff]'>
        <Head>
            <title>Cart - Croquetas "El Kilo" 🛒</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className='mx-auto max-w-5xl pb-24'>
            <div className='pb-5'>
                <h1 className='my-4 text-3xl font-semibold lg:text-4xl'>
                    {items.length > 0 ? 'Review your cart.' : 'Your cart is empty'}
                </h1>
                <p className='my-4'>Free delivery and returns.</p>

                {items.length === 0 && (
                    <Button 
                        title='Continue Shopping'
                        onClick={() => router.push('/')}
                    />
                )}

                {items.length > 0 && (
                    <div className='mx-5 md:mx-8'>
                        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                            <CheckoutProducts key={key} items={items} id={key} />
                        ))}

                        <div className='my-12 mt-6 ml-auto max-w-3xl'>
                            <div className='divide-y divide-gray-300'>
                                <div className='p4'>
                                    <div className='flex justify-between'>
                                        <p>Subtotal</p>
                                        <p><Currency value={basketTotal} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/></p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Shipping</p>
                                        <p>Free</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex flex-col gap-x-1 lg:flex-row'>
                                            Estimated Tax for:{" "}
                                            <p className='flex cursor-pointer items-end text-blue-500 hover:text-red-500 hover:font-semibold'>
                                                Enter ZIP Code
                                                <ChevronDownIcon className='h-6 w-6'/>
                                            </p>
                                        </div>
                                        <p>$ -</p>
                                    </div>
                                </div>

                                <div className='flex justify-between pt-4 text-xl font-semibold'>
                                    <h4>Total</h4>
                                    <h4>
                                        <Currency value={basketTotal} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/>
                                    </h4>
                                </div>
                            </div>

                            <div className='my-14 space-y-4'>
                                <h4 className='text-xl font-semibold'>
                                    How would you like to check out?
                                </h4>
                                <div className='flex flex-col gap-4 md:flex-row'>
                                    <div className='order-2 flex flex-1 flex-col items-center rounded-xl bg-gray-200 p-8 py-12 text-center'>
                                        <h4 className='mb-4 flex flex-col text-xl font-semibold'>
                                            <span>Pay Monthly</span>
                                            <span>With Credit Card</span>
                                            <span>
                                            <Currency value={basketTotal/12} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/>
                                                /mo at 0% APR <sup className='top-1'>0</sup>
                                            </span>
                                        </h4>
                                        <Button title='Check out with Creadit Card Monthly Installments'/>
                                        <p className='mt-2 max-w-[240px] text-[13px]'>
                                            $ 0.00 due today, which includes applicable full-price
                                            items, down payments, shipping and taxes.
                                        </p>   
                                    </div>

                                    <div className='flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2'>
                                        <h4 className='mb-4 flex flex-col text-xl font-semibold'>
                                            Pay in Full.
                                            <span>
                                            <Currency value={basketTotal} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/>
                                            </span>
                                        </h4>
                                        <Button 
                                            noIcon
                                            // loading={Puto el que lo lea!!}
                                            title='Check Out'
                                            width='w-full'
                                            onClick={createCheckoutSession}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>        
    </div>
  )
}

export default Checkout
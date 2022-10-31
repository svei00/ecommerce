import { CheckIcon, ChevronDownIcon, ChevronUpIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import felix from '../assets/images/felix-logo.png';
import { useMediaQuery } from 'react-responsive';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Currency from 'react-currency-format';
import { GetServerSideProps } from 'next';

interface Props {
    products: StripeProduct[];
}

function Success () {
    // Access to the Session ID
    const router = useRouter();
    const { session_id } = router.query;
    const [mounted, setMounted] = useState(false);
    const [showOrderSummary, setShowOrderSummary] = useState(false);
    // const subtotal = products.reduce (
    //     (acc, product) => acc + product.price.unit_amount / 100,
    //     0
    // );

    useEffect(() => {
        setMounted(true);
    },[]);

    // showOrderSummary always true for desktop but only conditionally true for mobile
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;

    const handleShowOrderSummary = () => {
        setShowOrderSummary(!showOrderSummary)
    }; 
  
    return (
    <div>
        <Head>
            <title>Thank you!! - Croquetas "El Kilo"</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <header className='mx-auto max-w-xl'>
            <Link href='/'>
                <div className='relative ml-4 h-16 w-8 cursor-pointer transition lg:hidden'>
                    <Image 
                        src={felix}
                        layout='fill'
                        objectFit='contain'
                        alt='Logo'
                    />
                </div>
            </Link>
        </header>

        <main className=''>
            <section className='order-2 mx-auto max-w-xl pb-12 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44'>
                <Link href='/'>
                    <div className='relative ml-14 hidden h-24 w-12 cursor-pointer transition lg:inline-flex'>
                        <Image 
                            src={felix}
                            layout='fill'
                            objectFit='contain'
                            alt='Logo'
                        />
                    </div>
                </Link>

                <div className='my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml'>
                    <div className='flex h-11 w-11 items-center justify-center rounded-full border-2 border-blue-600'>
                        <CheckIcon className='h-8 w-8' />
                    </div>
                    <div className='text-lg'>
                        <p className='text-sm text-gray-600'>Order #{session_id?.slice(-5)}</p> {/* Brings the las 5 characters */}
                        <h4>
                            Thank you {' '}!!
                            {/* { session ? session.user?.name?.split(' ')[0] : 'Guest'} */}
                        </h4>
                    </div>
                </div>

                <div className='mx-4 divide-y rounded-md border border-gray-300 p-4 lg:ml-14'>
                    <div className='space-y-2 pb-3'>
                        <p>Your order is confirmed</p>
                        <p className='text-sm text-gray-600'>
                            We've accepted your order, and we're getting it ready. Come Back
                            to this page for updates on your shipment status.
                        </p>
                    </div>
                    <div className='pt-3 text-sm'>
                        <p className='font-medium text-gray-600'>Tracking Number:</p>
                        <p>4RANDOM-NUMBER8</p>
                    </div>
                </div>

                <div className='my-4 mx-4 space-y-2 rounded-md border border-gray-300 p-4 lg:ml-14'>
                    <p>Order Updates</p>
                    <p className='text-sm  text-gray-600'>
                        You'll get shipping and delivery updates by email and text
                    </p>
                </div>
                <div >
                    <p className='hidden lg:inline'>Need help? Contact us</p>
                    {mounted && (
                        <Button
                            title='Continue Shopping'
                            onClick={() => router.push('/')}
                            width={isTabletOrMobile ? 'w-full' : undefined}
                            padding="py-4"
                        />
                    )}
                </div>
            </section>
            
            {mounted && (
                <section>
                    <div className={`w-full ${showOrderSummaryCondition && 'border-b'} border-gray-300 text-sm lg:hidden`}>
                        <div className='mx-auto flex max-w-xl items-center justify-between px-4 py-6'>
                            <button onClick={handleShowOrderSummary} 
                            className='flex items-center space-x-2'>
                                <ShoppingCartIcon className='h-6 w-6' />
                                <p>Show order sumary</p>
                                {showOrderSummaryCondition ? (
                                    <ChevronUpIcon className='h-4 w-4' />
                                ) : (
                                    <ChevronDownIcon className='h-4 w-4' />
                                )}
                            </button>
                            {/* <p classname='text-xl font-medium text-black'>
                                <Currency value={subtotal + (subtotal * 0.16)} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/>
                            </p> */}
                        </div>
                    </div>

                    {showOrderSummaryCondition && (
                        <div>
                            <div>

                            </div>
                        </div>
                    )}
                </section>
            )}
        </main>
        <Footer />
    </div>
  );
}

export default Success;

export const getServerSideProps: GetServerSideProps<Props> = async ({
    query, 
}) => {
    
    const sessionId = query.session_id as string
    // const products = await fetchLineItems(sessionId)
    
    return {
        props: {

        },
    };
};
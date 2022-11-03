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
import { fetchLineItems } from '../assets/js/fetchLineItems';
import { urlFor } from '../sanity';

interface Props {
    products: StripeProduct[];
}

function Success ({ products }: Props) {
    // Access to the Session ID

    console.log(products);

    const router = useRouter();
    const { session_id } = router.query;
    const [mounted, setMounted] = useState(false);
    const [showOrderSummary, setShowOrderSummary] = useState(false);
    const subtotal = products.reduce (
        (acc, product) => acc + product.price.unit_amount / 100,
        0
    );

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

        <main className='grid grid-cols-1 lg:grid-cols-9'>
            <section className='order-2 mx-auto max-w-xl pb-12 lg:col-span-5 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44'>
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
                <div className='mx-4 flex flex-col items-center justify-between text-sm lg:ml-14 lg:flex-row'>
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
                <section className='overflow-y-scroll border-y border-l border-gray-300 bg-[#FAFAFA] lg:order-2 lg:col-span-4 lg:h-screen lg:border-y-0'>
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
                            <p className='text-xl font-medium text-black'>
                                <Currency value={subtotal + (subtotal * 0.16)} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/>
                            </p>
                        </div>
                    </div>

                    {showOrderSummaryCondition && (
                        <div className='mx-auto max-w-xl divide-y border-gray-300 px-4 py-4 lg:mx-0 lg:max-w-lg lg:px-10 lg:py-16'>
                            <div className='space-y-4 pb-4'>
                                {products.map((product) => (
                                <div
                                    key={product.id}
                                    className='flex items-center space-x-4 text-sm font-medium'
                                >
                                        <div className='relative flex h-16 w-16 items-center justify-center rounded-md border border-gray-300 bg-[#F1F1F1] text-xs text-white'>
                                            <div className='relative h-7 w-7 animate-bounce rounded-md'>
                                                <Image 
                                                    src={felix}
                                                    layout='fill'
                                                    objectFit='contain'
                                                    alt='Products'               
                                                />
                                            </div>
                                            <div className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[gray] text-xs'>
                                                {product.quantity}
                                            </div>
                                        </div>
                                        <p className='flex-1'>{product.description}</p>
                                        <p>
                                            <Currency value={product.price.unit_amount / 100} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/>
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className='space-y-1 py-4'>
                                <div className='flex justify-between text-sm'>
                                    <p className='text-[gray]'>Subtotal</p>
                                    <p className='font-medium'>
                                        <Currency value={subtotal} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/>
                                    </p>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <p className='text-[gray]'>Discount</p>
                                    <p className='font-medium'>
                                        {/* <Currency value={subtotal} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/> */}
                                    </p>
                                </div>
                                <div className='flex justify-between text-sm'>
                                    <p className='text-[gray]'>Shipping</p>
                                    <p className='font-medium'>
                                        <Currency value={subtotal * .05} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/>
                                    </p>
                                </div>
                            </div>
                                <div className='flex justify-between pt-4'>
                                    <p className='text-[black]'>Total</p>
                                    <p 
                                        className='flex items-center gap-x-2 text-xs text-[grey]'>MXP
                                        <span>
                                            <Currency value={subtotal + (subtotal * .05)} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/>
                                        </span>
                                    </p>
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
    
    const sessionId = query.session_id as string;
    const products = await fetchLineItems(sessionId);
    
    return {
        props: {
            products,
        },
    };
};
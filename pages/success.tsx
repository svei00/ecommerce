import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import felix from '../assets/images/felix-logo.png';

function Success () {
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
            </section>
        </main>
    </div>
  );
}

export default Success;
import Image from 'next/image';
import React from 'react';
import Button from './Button';


const Landing = () => {
  return (
    <section className='sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8'>
        <div className='space-y-8'>
            <h1 className='space-y-3 text 5xl font-semibold tracking-wide lg:text-6xl'>
                <span className='block'>Powered by</span>
                <span className='bg-gradient-to-r from-red-700 via-yellow-400 to-black bg-clip-text text-transparent'>Purina</span>
                <span className='block'>Your pet our passion</span>
            </h1>

            <div>
                <Button title='Buy Now!!' />
                <a href="" className='link'>Learn More.</a>
            </div>
        </div>

        <div className='relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]'>
                <Image src='/pet-food-bulk-overweight.jpg' layout='fill' objectFit='contain' alt='Bulk Food' />
        </div>
    </section>
  )
}

export default Landing
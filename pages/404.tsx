import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from 'next/image';
import sad from '../assets/images/sad_cat.jpg';

import React from 'react'

const Error = () => {
  return (
    <div>
        <Header />

            <section>
                <div className="min-h-screen px-4 mx-auto max-w-7x1 sm:px-6 md:px-12 lg:px-24 lg:py-24 bg-gray-100">
                    <div className="flex flex-col w-full mb-12 text-left lg:text-center">
                        <Image 
                            src={sad} 
                            alt="Sad Cat"
                            layout = 'fill'
                            objectFit="contain" 
                            className='scale-50'
                            />
                        <h2 className="bg-gradient-to-r bg-clip-text  text-transparent 
                         from-red-600 via-yellow-500 to-black
                         animate-text text-4xl font-semibold font-monkey ">
                            404 - You've taken the wrong turn</h2>
                    </div>
                    <div className='absolute bottom-0 left-0 right-0 px-4 py-2'>
                        <p className="text-2xl max-w-xl mx-auto mt-4 text-left lg:text-center font-monkey">Looks like you're looking for your treats</p>
                        <p className="max-w-xl mx-auto mt-8 text-left lg:text-center font-monkey">Did you try lookiing throught our page? hit the links above!!</p>
                    </div>                            
                </div>
            </section>

        <Footer />
    </div>
  )
}

export default Error
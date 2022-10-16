import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import felix from '../assets/images/felix-logo.png';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>
        <div className='flex items-center justify-center md:w-1/5'>
            <Link href='/'>
                <div className='relative h-10 w-10 cursor-pointer opacity-50 transition hover:opacity-100'>
                    {/*Image is a nextjs optimized which has lazy load */}
                    <Image 
                        src={felix} 
                        alt = 'Felix Logo'
                        layout = 'fill'
                        objectFit='contain'
                        />
                </div>
            </Link>
        </div>
        <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
            <a className='headerLink'>Products</a>
            <a className='headerLink'>Explore</a>
            <a className='headerLink'>History</a>
            <a className='headerLink'>Business</a>
        </div>
        <div className=''>
            <MagnifyingGlassIcon className='headerIcon' />
        </div>     
    </header> 
  )
}

export default Header;
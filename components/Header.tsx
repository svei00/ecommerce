import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import felix from '../assets/images/felix-logo.png';
import boxer from '../assets/images/boxer.jpg'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';

const Header = () => {

    const session = false;
    const items = useSelector(selectBasketItems);

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
            <a className='headerLink link'>Products</a>
            <a className='headerLink link'>Explore</a>
            <a className='headerLink link'>History</a>
            <a className='headerLink link'>Business</a>
        </div>
        <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
            <MagnifyingGlassIcon className='headerIcon' />
                <Link href='/checkout'>
                    <div className='relative cursor-pointer'>
                        {items.length > 0 && (
                            <span className='absolute -rigth-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full
                            bg-gradient-to-r from from-blue-300 via-blue-500 to bg-purple-700 text-[10px] text-[#fee8d6]'>
                                {items.length}    
                            </span>
                        )}
                        <ShoppingCartIcon className='headerIcon' />
                    </div>
                </Link>

                {session ? (
                    <Image 
                        src={
                            // session.user?.image ||
                            {boxer}
                        }
                        alt='Avatar'
                        className='cursor-pointer rounded-full'
                        width={34}
                        height={34}
                        // onClick{() => signOut()}
                    />
                ) : ( 
                    <UserIcon 
                        className='headerIcon'
                        // onClick={() => signIn()}
                    />
                )}
        </div>     
    </header> 
  )
}

export default Header;
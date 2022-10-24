import Image from 'next/image';
import React from 'react'
import { urlFor } from '../sanity'
import CurrencyFormat from 'react-currency-format'
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

interface Props {
    product: Product;
}

function Product ({ product }: Props) {

    const addItemToBasquet = () => {
        window.alert("Nothing happens here =(");
    };
    

  return (
    <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10'>
        <div className='relative h-64  w-full md:h-72'>
            <Image 
            src={urlFor(product.image   [0]).url()}
            layout='fill'
            objectFit='contain' 
            alt='Product'
            />
        </div>
        <div className='flex flex-1 items-center justify-between space-x-3'>
            <div className='space-y-2 text-xl text-white md:text-2xl'>
                <p>{product.title}</p>
                <p><CurrencyFormat value={product.price} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true} prefix={'$'} /></p>
            </div>
            <div className='shopping' onClick={addItemToBasquet}>
                <ShoppingCartIcon className='h-8 w-8 text-white' />
            </div>
        </div>
    </div>
  );
}  

export default Product;
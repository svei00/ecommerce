import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button';
import CheckoutProducts from '../components/CheckoutProducts';
import Header from '../components/Header'
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice';
import Currency from 'react-currency-format';

function Checkout() {

    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const router = useRouter();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
        {} as { [key: string]: Product[] }
    );

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item._id] = results[item._id] || []).push(item);
            return results;
        }, {} as { [key:string]: Product[] });

         setGroupedItemsInBasket(groupedItems);
    }, [items]);

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

                        <div>
                            <div>
                                <div>
                                    <div>
                                        <p>Subtotal</p>
                                        <p><Currency value={basketTotal} displayType={'text'} decimalSeparator="." decimalScale={2} thousandSeparator={true}  fixedDecimalScale={true} prefix={'$'}/></p>
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
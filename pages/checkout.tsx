import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from '../components/Button';
import Header from '../components/Header'
import { selectBasketItems } from '../redux/basketSlice';

function Checkout() {

    const items = useSelector(selectBasketItems);
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
    <div>
        <Head>
            <title>Cart - Croquetas "El Kilo" 🛒</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
            <div>
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
                    <div>
                        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                            <CheckoutProducts key={key} items={items} id={key} />
                        ))}
                    </div>
                )}
            </div>
        </main>        
    </div>
  )
}

export default Checkout
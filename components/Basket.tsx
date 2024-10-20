import { useRouter } from 'next/router'; // Import useRouter from next/router
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';

function Basket() {
    const items = useSelector(selectBasketItems);
    const router = useRouter(); // Initialize useRouter

    if (items.length === 0) return null;

    const handleCheckout = () => {
        router.push('/checkout'); // Programmatic navigation
    };

    return (
        <div className='shoppingCartOut' onClick={handleCheckout} style={{ cursor: 'pointer' }}>
            {items.length > 0 && (
                <span className='shoppingCartIn'>
                    {items.length}
                </span>
            )}
            <ShoppingBagIcon className='headerIcon h-8 w-8' />
        </div>
    );
}

export default Basket;
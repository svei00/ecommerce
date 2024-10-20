import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';

function Basket() {
    const items = useSelector(selectBasketItems);

    if (items.length === 0) return null;

    return (
        <Link href="/checkout">
            <div className='shoppingCartOut'>
                {items.length > 0 && (
                    <span className='shoppingCartIn'>
                        {items.length}
                    </span>
                )}
                <ShoppingBagIcon className='headerIcon h-8 w-8' />
            </div>
        </Link>
    );
}

export default Basket;
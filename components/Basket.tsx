import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'; // Next.js link
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';

function Basket() {
    const items = useSelector(selectBasketItems);

    if (items.length === 0) return null;

    return (
        <Link href='/checkout'>
            <a className='shoppingCartOut'> {/* Wrap it in an anchor tag */}
                {items.length > 0 && (
                    <span className='shoppingCartIn'>
                        {items.length}
                    </span>
                )}
                <ShoppingBagIcon className='headerIcon h-8 w-8' />
            </a>
        </Link>
    );
}

export default Basket;
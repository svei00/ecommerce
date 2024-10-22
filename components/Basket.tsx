import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectBasketItems } from '../redux/basketSlice';

function Basket() {
    const items = useSelector(selectBasketItems);
    const router = useRouter();

    if (items.length === 0) return null;

    const handleCheckout = () => {
        router.push('/checkout');
    };

    return (
        <div className='shoppingCartOut' onClick={handleCheckout} style={{ cursor: 'pointer' }}>
            {items.length > 0 && (
                <span className='shoppingCartIn'>
                    {items.length}
                </span>
            )}
            {/* Replacing ShoppingBagIcon with raw SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="headerIcon h-8 w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M4.5 7.5L5.25 18A2.25 2.25 0 007.5 20.25h9A2.25 2.25 0 0018.75 18l.75-10.5m-13.5 0V6A4.5 4.5 0 0112 1.5v0A4.5 4.5 0 0116.5 6v1.5m-9 0h9" />
            </svg>
        </div>
    );
}

export default Basket;
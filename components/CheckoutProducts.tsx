import { urlFor } from "../sanity";
import Currency from 'react-currency-format';
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";

interface Props {
    items: Product[];
    id: string;
}

function CheckoutProducts({id, items}: Props) {
    
    const dispatch = useDispatch();

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
        
        toast.error(`${items[0].title} has been removed from Cart`, {
            position: "top-center"
        });
    };

    return (
        <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
            <div className="relative h-44 w-44">
                {items[0]?.image[0] && (
                    <img 
                        src={urlFor(items[0].image[0]).url()} 
                        style={{ objectFit: "contain", width: "100%", height: "100%" }} 
                        alt="Product"
                    />
                )}
            </div>

            <div className='flex flex-1 items-end lg:items-center'>
                <div className="flex-1 space-y-4">
                    <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
                        <h4 className='font-semibold lg:w-96'>{items[0].title}</h4>
                        <p className='flex items-end gap-x-1 font-semibold'>
                            {items.length}
                            {/* Replace ChevronDownIcon with SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-blue-500">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                            </svg>
                        </p>
                    </div>

                    <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        Show Product Details
                        {/* Replace ChevronDownIcon with SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                        </svg>
                    </p>
                </div>
                <div className="flex flex-col items-end space-y-4">
                    <h4 className="text-xl font-semibold lg:text-2xl">
                        <Currency 
                            value={items.reduce((total, item) => total + item.price, 0)} 
                            displayType={'text'} 
                            decimalSeparator="." 
                            decimalScale={2} 
                            thousandSeparator={true}  
                            fixedDecimalScale={true} 
                            prefix={'$'}
                        />
                    </h4>
                    <button
                        onClick={removeItemFromBasket}
                        className='text-blue-500 hover:text-red-600 hover:font-semibold'
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutProducts;
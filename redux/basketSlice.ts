import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface BasketState {
    items: Product[];
}

// This is like useState un React
/* const [items, setItems] = useState([]); */

const initialState: BasketState = {
    items: [],
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
            // Redux toolkit allow us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the inner library,
            // which detects changes to a "draft state" and produces a brand new
            // inmutable state based off those changes.
            state.items = [...state.items, action.payload]; 
        },
        removeFromBasket: (
            state: BasketState,
            action: PayloadAction<{ id: string }>
        ) => {
            const index = state.items.findIndex(
                (item: Product) => item._id === action.payload.id
            );

            let newBasket = [...state.items];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log(
                    `Can't remove product  (id: ${action.payload.id}) as its not in basket!`
                );
            }

            state.items = newBasket;
        },
    },
}); 

// Action creators are generated for each case reducer functions
export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItems: 0,
    },
    reducers:{
        addItem: (state,action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);

            if (existingItem) {
                // Increment the quantity of the existing item
                existingItem.quantity += 1;
            } else {
                // Add the new item to the cart with quantity 1
                state.items.push({ ...action.payload, quantity: 1 });
            }
            // Increment the total cart count
            state.totalItems += 1;
        },
        removeItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
        
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    // Decrease quantity if more than one
                    existingItem.quantity -= 1;
                } else {
                    // Remove the item completely if only one is left
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
                // Decrement the total cart count
                state.totalItems -= 1;
            }
        },
       
    }
})

export const {addItem,removeItem} = cartSlice.actions;

export default cartSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        },
    },
});

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;
export const productState = (state: RootState) => state.product
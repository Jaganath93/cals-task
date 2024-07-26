import { configureStore } from "@reduxjs/toolkit";
import input1 from "./slices/input1";
// import input1 from "./slices/input1";
import inputSlice from './slices/input1'


export const store = configureStore({
    reducer: inputSlice
})
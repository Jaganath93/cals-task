import { createSlice } from "@reduxjs/toolkit";



const inputSlice = createSlice({
    name:'inputSlice',
    initialState: 0,
    reducers:{
        setValue: (state,action)=>{
            return state = action.payload;
        },

        getValue: (state,action)=>{
            return state = state;
        }
    }
});

export const {setValue,getValue} = inputSlice.actions;
export default inputSlice.reducer; 
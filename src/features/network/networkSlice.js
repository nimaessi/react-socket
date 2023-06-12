import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    networkValue: [],
    loading: false,
    error: ""
}
const networkSlice = createSlice({
    name: "network",
    initialState,
    reducers:{
        setData: (state, action) => {
            state.networkValue.push(action.payload)
        },
        fetchFail: (state, action) => {
            state.error = action.payload
        },
    }
});
export default networkSlice.reducer;
export const { setData, fetchFail } = networkSlice.actions;
export const selectNetwork = (store) => store.network;
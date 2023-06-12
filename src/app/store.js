import { configureStore } from "@reduxjs/toolkit";
import networkReducer from "../features/network/networkSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {network: networkReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
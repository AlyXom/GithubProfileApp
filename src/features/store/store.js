import { configureStore } from "@reduxjs/toolkit";
import userslice  from "../users/userSlice";

export const store = configureStore({
    reducer: {
        user: userslice
    }
})
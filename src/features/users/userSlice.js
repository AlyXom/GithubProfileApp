import { createSlice } from "@reduxjs/toolkit";

const arr = {
    data: [
        
    ]
}

export const userReducer = createSlice({
    name: "user",
    initialState: arr.data,
    reducers: {
        add: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export const {add} = userReducer.actions

export default userReducer.reducer
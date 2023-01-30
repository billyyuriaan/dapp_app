import { createSlice } from "@reduxjs/toolkit";

/*
a good remider here, i understant your frustation to seeing WTF you didn't encrypt it?
to that i answer, yes, i know it because i didn't desain to publish this on the world, just a nice local app
it would be a fool to up this to the server hoping it would be save
 */

export const userSlice = createSlice({
    name : "user",
    initialState : {
        alias : localStorage.getItem("alias"),
        pub : localStorage.getItem("pub")
    },

    reducers: {
        logout : (state) => {
            localStorage.removeItem("alias")
            localStorage.removeItem("pub")
        },

        login : (state, action) => {
            state.alias = action.payload.alias
            state.pub = action.payload.pub

            localStorage.setItem("alias", action.payload.alias)
            localStorage.setItem('pub', action.payload.pub)
        }
    },
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer
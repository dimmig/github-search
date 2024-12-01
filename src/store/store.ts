import {configureStore} from '@reduxjs/toolkit'
import {githubApi} from "../api/app";
import {setupListeners} from "@reduxjs/toolkit/query";
import {favouritesSlice} from "./favouritesSlice";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        favourites: favouritesSlice.reducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(githubApi.middleware)
    )
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
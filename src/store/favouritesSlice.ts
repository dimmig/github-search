import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Repo} from "../models/models";

const initialState: { favourites: Repo[] } = {
    favourites: []
}
export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addToFavourites: (state, action: PayloadAction<Repo>) => {
            if (!state.favourites.find(repo => repo.id === action.payload.id)) {
                state.favourites.push(action.payload)
            }
        },
        removeFromFavourites: (state, action: PayloadAction<Repo>) => {
            state.favourites = state.favourites.filter(repo => repo.id !== action.payload.id)
        }
    },
})

export const {addToFavourites, removeFromFavourites} = favouritesSlice.actions
export default favouritesSlice.reducer
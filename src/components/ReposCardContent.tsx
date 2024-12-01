import * as React from 'react';
import {addToFavourites, removeFromFavourites} from "../store/favouritesSlice";
import {Repo} from "../models/models";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";

type Props = {
    item: Repo
};
export const ReposCardContent = ({item}: Props) => {
    const dispatch = useDispatch()
    const favourites = useSelector((state: RootState) => state.favourites).favourites

    return (
        <div key={item.id}
             className='p-4 flex w-[100%] flex-col gap-2 h-max bg-gray-200 rounded-md shadow-md cursor-pointer transition hover:bg-gray-100'
             onClick={() => window.open(item.html_url)}>
            <h2 className='text-gray-500 font-bold'>
                {item.name}
            </h2>
            {item.description && (
                <p className='text-gray-500 text-sm'><b>Description:</b> {item.description}</p>
            )}

            <p className='text-gray-500 text-sm'><b>Forks:</b> {item.forks_count}</p>
            <p className='text-gray-500 text-sm'><b>Created at:</b> {item.created_at.split("T")[0]}</p>
            {favourites.find(it => it.id === item.id) ? (
                <button className='self-end bg-red-400 text-white w-max p-2 rounded-md text-sm shadow-md'
                        onClick={(e) => {
                            e.stopPropagation()
                            dispatch(removeFromFavourites(item))
                        }}>Remove from favourites
                </button>
            ) : (
                <button className='self-end bg-green-400 text-white w-max p-2 rounded-md text-sm shadow-md'
                        onClick={(e) => {
                            e.stopPropagation()
                            dispatch(addToFavourites(item))
                        }}>Add to favourites
                </button>
            )}
        </div>
    );
};
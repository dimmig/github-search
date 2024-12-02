import * as React from 'react';
import {Link} from "react-router-dom";

type Props = {};

export function Navbar(props: Props) {
    return (
        <nav className='text-white bg-gray-400 flex justify-between items-center h-[50px] px-5 shadow-md '>
            <h2 className='font-bold'>Github Search</h2>
            <span className='flex flex-row gap-4'>
                <Link to='/github-search'>Home</Link>
                <Link to='/github-search/favourites'>Favourites</Link>
            </span>
        </nav>
    );
};
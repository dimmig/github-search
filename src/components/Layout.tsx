import * as React from 'react';
import {Navbar} from "./Navbar";

type Props = {
    children: React.ReactNode
};
export const Layout = ({children}: Props) => {
    return (
        <div className='h-[100vh]'>
            <Navbar/>
            {children}
        </div>
    );
};
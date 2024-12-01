import * as React from 'react';
import {Layout} from "../components/Layout";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {ReposCardContent} from "../components/ReposCardContent";

type Props = {};
export const Favourites = (props: Props) => {
    const favourites = useSelector((state: RootState) => state.favourites).favourites
    return (
        <Layout>
            <div className='flex justify-center items-center ml-[40%] flex-col gap-2 w-[400px] overflow-y-scroll absolute top-40'>
                {favourites.length === 0 ? (
                        <h2 className='font-bold text-2xl text-gray-500'>Favourites list is empty</h2>) :
                    (
                        <>
                            <h2 className='text-2xl font-bold text-gray-500 mb-5'>Favourites: </h2>
                            {favourites.map(it => (
                                <ReposCardContent key={it.id} item={it} />
                            ))}
                        </>
                    )
                }
            </div>
        </Layout>
    );
};
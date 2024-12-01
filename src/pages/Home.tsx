import * as React from 'react';
import {Layout} from "../components/Layout";
import {CiSearch} from "react-icons/ci";
import {useListUsersByNameQuery} from "../api/app";
import {useEffect, useState} from "react";
import {useDebounce} from "../hooks/useDebounce";
import {IUser} from "../models/models";
import {RepoCard} from "../components/RepoCard";
import {ThreeDots} from "react-loader-spinner";

type Props = {};
export const Home = (props: Props) => {
    const [searchQuery, setSearchQuery] = useState<string | null>(null)
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [selectedUserName, setSelectedUserName] = useState<string | null>(null)
    const debounced = useDebounce(searchQuery)
    const {data, isLoading} = useListUsersByNameQuery(debounced, {
        skip: debounced === null || debounced.length < 3
    })

    useEffect(() => {
        setShowDropdown(!selectedUserName && data?.length! > 0 && debounced?.length! > 3)
    }, [debounced, data, selectedUserName]);

    return (
        <Layout>
            <div className='flex w-[100%] h-[100%] justify-center items-center'>

                <div className='relative w-max h-max'>
                    <input placeholder="Search by user name"
                           className='mb-64 w-[400px] bg-gray-100 rounded-md outline-none p-2 pl-4 pr-12 border-2 border-gray-200 text-gray-500 shadow-md'
                           onChange={e => {
                               setSearchQuery(e.target.value)
                               if (selectedUserName) {
                                   setSelectedUserName(null)
                               }
                           }}/>
                    <CiSearch size={24} className='absolute right-3 top-2'/>
                    {isLoading &&
                        <ThreeDots height="80"
                                   width="80"
                                   color="gray"
                                   ariaLabel="loading"
                                   wrapperClass={"wrapper-spinner-class"}
                        />
                    }
                    {data?.length === 0 && <h2 className='absolute top-14 left-[30%]'>No data found</h2>}
                    {showDropdown && data && !isLoading && (
                        <ul className='absolute bg-gray-50 w-[100%] top-12 rounded-md max-h-[350px] overflow-y-scroll'>
                            {data.map((it: IUser) => (
                                <li className='p-2 px-4 border-b-2 border-b-gray-100 cursor-pointer  hover:bg-gray-200 transition'
                                    key={it.id} onClick={() => setSelectedUserName(it.login)}>{it.login}</li>
                            ))}
                        </ul>
                    )}
                    {selectedUserName && (
                        <RepoCard userName={selectedUserName}/>
                    )}
                </div>
            </div>
        </Layout>
    );
};
import * as React from 'react';
import {useListUserReposQuery} from "../api/app";
import {Repo} from "../models/models";
import {ReposCardContent} from "./ReposCardContent";
import {Audio, ThreeDots} from "react-loader-spinner";

type Props = {
    userName: string
};
export const RepoCard = ({userName}: Props) => {
    const {data, isLoading} = useListUserReposQuery(userName)

    if (isLoading) {
        return <ThreeDots height="80"
                      width="80"
                      color="gray"
                      ariaLabel="loading"
                      wrapperClass={"wrapper-spinner-class"}
        />
    }

    return (
        <div className='flex flex-col gap-2 w-[100%] overflow-y-scroll absolute top-20'>
            {data?.length > 0 && data.map((it: Repo) => (
                <ReposCardContent key={it.id} item={it}/>
            ))}
        </div>
    );
};
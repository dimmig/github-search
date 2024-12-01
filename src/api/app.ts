import {BaseQueryArg, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IUser} from "../models/models";

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/'}),
    endpoints: (builder) => ({
        listUsersByName: builder.query<IUser[], string | null>({
            query: (userName: string) => ({
                url: 'search/users',
                params: {
                    q: userName // to get an array of users
                }
            }),
            transformResponse: (response: { items: IUser[] }, meta, arg) => response.items,
        }),
        listUserRepos: builder.query<any, string | null>({
            query: (userName: string) => ({
                url: `users/${userName}/repos`
            })
        })
    }),
})

export const {useListUsersByNameQuery, useListUserReposQuery} = githubApi
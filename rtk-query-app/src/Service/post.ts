import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../Contracts/Post';
export const postAPI = createApi({
    reducerPath:"postAPI",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints:(builder)=>({
        getPosts:builder.query<Post[],void>({
            query:()=>'/posts'
        }),      
    })    
  })
  export const {useGetPostsQuery}=postAPI;
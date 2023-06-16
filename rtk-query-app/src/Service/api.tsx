import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Todo } from '../Contracts/Todo'
export const api = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints:(builder)=>({
        getTodos:builder.query<Todo[],void>({
            query:()=>'/todos'
        }),
        getTodoByID:builder.query({
            query:(id:number)=>({
                url:`/todos/${id}`,
                method:"GET"
            })
        }),
        postData:builder.mutation({
            query:(data)=>({
                url:"/posts",
                method:"POST",
                body:data,
                headers:{
                   " Content-type":"application/json;charset=UTF-8"
                }
            })
        })
    })    
  })
  export const {useGetTodosQuery,useGetTodoByIDQuery,usePostDataMutation}=api;
  
  

import {configureStore} from "@reduxjs/toolkit";
import {api} from "./Service/api";
import { postAPI } from "./Service/post";
export const store=configureStore({
    reducer:{
        [api.reducerPath]:api.reducer,
        [postAPI.reducerPath]:postAPI.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware,postAPI.middleware)
})

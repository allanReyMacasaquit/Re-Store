
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { accountSlice } from "../../features/account/AccountSlice";
import { basketSlice } from "../../features/basket/basketSlice/basketSlice";
import { catalogSlice } from "../../features/catalog/catalogSlice/catalogSlice";
import { counterSlice } from "../../features/contact/counterSlice";

export const store = configureStore({
    reducer: {
        account: accountSlice.reducer,
        basket: basketSlice.reducer,
        catalog: catalogSlice.reducer,
        counter: counterSlice.reducer,
        
    }
}) 

axios.interceptors.request.use(config => {
    const token = store.getState().account.user?.token;
    if (token) config.headers = {Authorization: `Bearer ${token}`}
    return config;
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
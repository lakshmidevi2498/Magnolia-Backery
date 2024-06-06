import { combineReducers } from "redux";
import { GetReducer } from "./get_reducer";
import { GetSwiperReducer } from "./gatswiper_reducer";
import { GetSwiper2Reducer } from "./getswiper2_reducer";

export const rootReducer=combineReducers({
    getdatainformation:GetReducer,
    getswiperdatainformation:GetSwiperReducer,
    getswiperdata2information:GetSwiper2Reducer,
   
})
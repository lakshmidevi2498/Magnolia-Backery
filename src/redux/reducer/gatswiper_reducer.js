import * as types from "../action/actionTypes";

const initialise = {
    swiperData: [],
    loading: false,
    error: null
};

export const GetSwiperReducer = (state = initialise, action) => {
    switch (action.type) {
      
        case types.GET_SWIPER_DATA_SUCCESS:
            console.log("this is getSwiperReducer call----->")
            return {
                ...state,
                swiperData: action.payload,
                loading: false,
                error: null,
            };
        case types.GET_SWIPER_DATA_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
     
        default:
            return state;
    }
};
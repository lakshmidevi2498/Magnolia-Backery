import * as types from "../action/actionTypes";

const initialise = {
    swiperData1: [],
    loading: false,
    error: null
};

export const GetSwiper2Reducer = (state = initialise, action) => {
    switch (action.type) {
            case types.GET_SWIPER_DATA1_START:
                return {
                    ...state,
                    loading: true,
                    error: null,
                };
            case types.GET_SWIPER_DATA1_SUCCESS:
                console.log("this is getSwiperdata1Reducer call----->")
                return {
                    ...state,
                    swiperData1: action.payload,
                    loading: false,
                    error: null,
                };
            case types.GET_SWIPER_DATA1_ERROR:
                return {
                    ...state,
                    error: action.payload,
                    loading: false,
                };
        default:
            return state;
    }
};
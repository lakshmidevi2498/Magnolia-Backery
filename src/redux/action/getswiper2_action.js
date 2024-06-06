import * as types from "../action/actionTypes"

export const getSwiperData1Start=()=>{
    console.log("this is getswiperdata1start......>")
    return{
        type:types.GET_SWIPER_DATA1_START
    };
};
export const getSwiperData1Success=(data)=>{
    console.log("this is swiperdata1success......>",data,)
    return{
        type:types.GET_SWIPER_DATA1_SUCCESS,
        payload:data,
    };
}
export const getSwiperData1Error=(error)=>{
    console.log("this is getswipedata1error.....>")
    return{
        type:types.GET_SWIPER_DATA1_ERROR,
         payload:error,
    }


}


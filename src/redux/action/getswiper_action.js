import * as types from "../action/actionTypes"

export const getSwiperDataStart=()=>{
    console.log("this is getswiperdatastart......>")
    return{
        type:types.GET_SWIPER_DATA_START
    };
};
export const getSwiperDataSuccess=(data)=>{
    console.log("this is getswipedatasuccess......>",data,"erftg")
    return{
        type:types.GET_SWIPER_DATA_SUCCESS,
        payload:data,
    };
}
export const getSwiperDataError=(error)=>{
    console.log("this is getswipedataerror.....>")
    return{
        type:types.GET_SWIPER_DATA_ERROR,
         payload:error,
    }


}






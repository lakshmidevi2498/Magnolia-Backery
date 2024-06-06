import * as types from "../action/actionTypes"

export const getDataStart=()=>{
    console.log("this is getdatastart......>")
    return{
        type:types.GET_DATA_START
    };
};
export const getDataSuccess=(data)=>{
    console.log("this is getdatasuccess......>")
    return{
        type:types.GET_DATA_SUCCESS,
        payload:data,
    };
}
export const getDataError=(error)=>{
    console.log("this is getdataerror.....>")
    return{
        type:types.GET_DATA_ERROR,
         payload:error,
    }


}
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


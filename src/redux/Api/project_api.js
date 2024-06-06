import axios from 'axios';

const baseurl='https://auth-613f8-default-rtdb.firebaseio.com';
// const url1='https://auth-613f8-default-rtdb.firebaseio.com/swiperData.json';
export const getProjectData=async()=>{
    
    try {
        const response = await axios.get(`${baseurl}/cardsData.json`);
        if (response.data) {
            console.log(response.data)
            const fetchedData = Object.keys(response.data).map(key => ({
                id: key,
                ...response.data[key]
            }));
            console.log("this is api file in get call----->") 
            return fetchedData;
        } else {
            console.log("no data found")
            return [];
            
        }
    } catch (error) {
        console.log('Error is:', error);
        return [];
    }
}

export const getSwiperData=async()=>{
    
    try {
        const response = await axios.get(`${baseurl}/swiperData.json`);
        if (response.data) {
            console.log(response.data)
            const fetchedswiperData = Object.keys(response.data).map(key => ({
                id: key,
                ...response.data[key]
            }));
            console.log("this is api file in swiperdata get call----->",fetchedswiperData) 
            return fetchedswiperData;
        } else {
            console.log("no data found")
            return [];
            
        }
    } catch (error) {
        console.log('Error is:', error);
        return [];
    }
}

export const getSwiperData1=async()=>{
    
    try {
        const response = await axios.get(`${baseurl}/swiperData2.json`);
        if (response.data) {
            console.log(response.data)
            const fetchedswiperData = Object.keys(response.data).map(key => ({
                id: key,
                ...response.data[key]
            }));
            console.log("this is api file in swiperdata1 get call----->",fetchedswiperData) 
            return fetchedswiperData;
        } else {
            console.log("no data found")
            return [];
            
        }
    } catch (error) {
        console.log('Error is:', error);
        return [];
    }
}
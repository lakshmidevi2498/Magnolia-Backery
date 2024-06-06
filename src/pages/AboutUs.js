import REACT from 'react';
import Smnavbar from './components/Smnavbar';
import MegaMenu from './components/navbar';
import Aboutcomp1 from './components/aboutcom1';
import Aboutcomp2 from './components/aboutcomp2';
import Aboutcomp3 from './components/aboutcom3';
import Aboutcomp4 from './components/aboutcom4';
import Input from './components/input';
import Footer from './components/footer';
const AboutUs=()=>{

    return(
    
        <>
        <Smnavbar/>
         <MegaMenu/>
        <Aboutcomp1/>
        <Aboutcomp2/>
        <Aboutcomp3/>
        <Aboutcomp4/>
        <Input />
         <Footer />
        </>
    )
}
export default AboutUs;
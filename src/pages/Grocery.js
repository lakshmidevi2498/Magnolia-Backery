import REACT from 'react';
import Innercomp1 from './components/innerpcomp1';
import Smnavbar from './components/Smnavbar';
import MegaMenu from './components/navbar';
import Innercomp2 from './components/innercomp2';
import Input from './components/input';
import Footer from './components/footer';
const Grocery=()=>{
    return(
    
        <>
        <Smnavbar/>
        <MegaMenu/>
        <Innercomp1/>
        <Innercomp2/>
        <Input></Input>
        <Footer/>
        </>
    )
}
export default Grocery;
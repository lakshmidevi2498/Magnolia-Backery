import REACT from 'react';
import Smnavbar from './components/Smnavbar'
import Corousal from './components/carousal'
import MegaMenu from './components/navbar';
import Card from './components/card';
import Card2 from './components/card2';
import Delivery from './components/delivery';
import Banner from './components/banner';
import Input from './components/input';
import Footer from './components/footer';

const Home=()=>{
return(
    
    <>
    <Smnavbar/>
     <MegaMenu/>
     <Corousal/>
     <Card/>
     <Card2/>
    <Delivery/>
    <Banner/>
    <Input></Input>
    <Footer/>
    </>
)
}
export default Home;
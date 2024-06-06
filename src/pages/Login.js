import REACT from 'react'
import Form from './components/form';
import Smnavbar from './components/Smnavbar';
import MegaMenu from './components/navbar';
import Input from './components/input';
import Footer from './components/footer';

const Login=()=>{
    return(
        <>
        <Smnavbar/>
        <MegaMenu/>
        <Form/>
        <Input></Input>
        <Footer/>
        </>
    )
}
export default Login;
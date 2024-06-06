import React from 'react';
import MegaMenu from "./components/navbar";
import Smnavbar from "./components/Smnavbar";
import Component1 from "./components/ordercomp1";
import Component2 from "./components/ordercomp2";
import Component4 from "./components/ordercomp4";
import Input from "./components/input";
import Footer from "./components/footer";

const Order = () => {
    return (
        <>
            <Smnavbar />
            <MegaMenu />
            <Component1 />         
            <Component4 />
            <Input />
            <Footer />
        </>
    );
}

export default Order;

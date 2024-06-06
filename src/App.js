
import './App.css';
import {BrowserRouter , Routes, Route,useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Grocery from './pages/Grocery';
import Order from './pages/Order';
import Login from './pages/Login';
import Register from './pages/components/Register';
import { Provider } from 'react-redux';
import store from './redux/store';
import React,{useEffect, useRef} from 'react';



const ScrollToTop = () => {
  const  pathname  = useLocation();
  const prevPathname = useRef();

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      window.scrollTo(0, 0);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};


function App() {
  return (
    <>
    
      <Provider store={store}> 
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/collection/:id" element={<Order/>}/>
          <Route path="/innerproducts" element={<Grocery/>}/>
          <Route path="/login" element={<Login/>}/>         
          <Route path='/register' element={<Register/>}/>
        </Routes>     
    </BrowserRouter>
    </Provider>
   
   </>
  );
}

export default App;

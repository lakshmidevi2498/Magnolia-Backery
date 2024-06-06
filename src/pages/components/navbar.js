
import React, { useState } from 'react';
import { NavLink ,Link, Navigate, useNavigate} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';

const MegaMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate=useNavigate()

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const data1=[
    {id:"1",li:"Gift Cards"},
    {id:"2",li:"Icebox Desserts"},
    {id:"3",li:"Merchandise"},
    {id:"4",li:"Pudding of the Month"},
    {id:"5",li:"Sampler Packs"},
    // {id:"6",li:""},
  ]
  const data2=[
    {id:"1",li:"Bleecker Street"},
    {id:"2",li:"Bloomingdales"},
    {id:"3",li:"Central Park South"},
    {id:"4",li:"Grand Central Terminal"},
    {id:"5",li:"Grand Central Madison"},
    {id:"6",li:"Hudson Yards"},
    {id:"7",li:"Moynihan Train Hall"},
    {id:"8",li:"Rockefeller Center"},
    {id:"9",li:"Upper West Side"},
  ]
  

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleHome=()=>{
    navigate("/")
  }
  const handleAbout=()=>{
    navigate('/about')
  }
  const handleLogin=()=>{
    navigate('/login')
  }
 

  return (
  <div className='ontainer-fluid position-sticky top-0 ' style={{zIndex:'1001'}}>
    <nav className="navbar navbar-expand-lg position-relative  bg-white" style={{ zIndex: '99' ,width:'100%',height:'auto'}}>
      <div className="container-fluid ">
        <button  className="navbar-toggler border border-dark rounded-circle p-2 mt-1"  type="button"  onClick={toggleSidebar}  aria-label="Toggle navigation"  style={{ width: '30px', height: '30px' }}  >
          <i className="fa-solid fa-bars d-block" style={{ fontSize: '15px', zIndex: '99' }}></i>
        </button>
        <div className="position-absolute top-0 start-50 translate-middle-x logo" style={{ zIndex: '100' }}>
          <div className="text-center m-0 ">
            <img src="/assets/images/logo-removebg-preview (1).png" className="rounded-circle log-on" width="150vw" height="120vh" alt="Logo" onClick={handleHome}/>
          </div>
          <div className=" d-block m-auto top-0 right-0 ">
            <img src="/assets/images/logo2-removebg-preview.png" className="logo2 " width="160" height="40" alt="Logo" style={{ zIndex: '99' }} />
          </div>
        </div>
        <div className='carticon'>
          <i className="fa-solid fa-cart-shopping mx-2 border border-dark rounded-circle p-1 " style={{ fontSize: "15px", zIndex: '99' }}></i>
        </div>

        <div className={`offcanvas offcanvas-start  ${showSidebar ? 'show' : ''}`} id="navbarOffcanvasLg" style={{ zIndex: '98', width: '100%' }}>
          <div className="offcanvas-header d-flex justify-content-between">
            <div>
              <button
                className="navbar-toggler border border-dark rounded-circle p-2 " type="button"  onClick={toggleSidebar}  aria-label="Toggle navigation"  style={{ width: '30px', height: '30px' }}  >
                <i className="fa-solid fa-bars d-block" style={{ fontSize: '15px', zIndex: '99' }}></i>
              </button>
            </div>

            <div className='carticon'>
              <i className="fa-solid fa-cart-shopping mx-2 border border-dark rounded-circle p-1 " style={{ fontSize: "15px" }}></i>
            </div>
          </div>
          <div className="offcanvas-body">
            <div className='searchicon'>
              <i className="fa-solid fa-magnifying-glass m-4 " style={{ fontSize: "15px" }}><span className='text-secondary ' style={{ fontSize: "13px", marginLeft: "20px" }}>SEARCH OUR STORY</span></i>
            </div>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item dropdown has-megamenu position-static nav-order my-0 my-lg-auto  ">
                <NavLink
                  className="nav-link fw-medium d-flex align-items-center justify-content-between"  data-bs-toggle="dropdown"  to="/order"  onClick={() => toggleDropdown('order')}  activeClassName="active" >
                  ORDER ONLINE
                   <div className=''>
                   {activeDropdown === 'order' ? (
                    <i className="fa fa-chevron-up ms-2 icons"></i>
                  ) : (
                    <i className="fa fa-chevron-down ms-2 icons"></i>
                  )}
                   </div>
                 

                </NavLink>
                <div
                  aria-labelledby="dropdownMenuButton1"  className="dropdown-menu border-0 p-3 m-0 div-mega"  style={{ zIndex: '1' }}  >
                  <div className="container-fluid row row-cols-1 row-cols-md-1 row-cols-lg-4 p-3  mt-sm-1 mt-lg-3 ">
                    <div className="col my-2">
                      <ul className="list-unstyled  ">
                        <li><a className="dropdown-item fw-bold underline" href="#">ORDER NOW</a></li>
                        <li><a className="dropdown-item" href="#">Nationwide Shipping</a></li>
                        <li><a className="dropdown-item" href="#">Advance Order for Pick Up</a></li>
                        <li><a className="dropdown-item" href="#">Same Day Pick Up or Delivery</a></li>
                      </ul>
                    </div>
                    <div className="col mb-3">
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item fw-bold underline" href="#">SHOP BAKERY PRODUCTS</a></li>
                        <li><Link className="dropdown-item" to='/collection/banana'>Banana Pudding</Link></li>
                        <li><Link className="dropdown-item" to='/collection/brownies'>Brownies & Bars</Link></li>
                        <li><Link className="dropdown-item" to='/collection/cakes'>Cakes</Link></li>
                        <li><a className="dropdown-item" href="#">Cheesecakes</a></li>
                        <li><a className="dropdown-item" href="#">Cookies</a></li>
                        <li><a className="dropdown-item" href="#">Cupcakes</a></li>
                      </ul>
                    </div>
                    <div className="col mb-3">
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item fw-bold underline" href="#"></a></li>
                        {data1.map((data,index)=>(
                          <li key={index}><a className="dropdown-item" href="#">{data.li}</a></li>
                        ))}
                        
                      </ul>
                    </div>
                    <div className="col mb-3">
                      <img src="./assets/images/navimg.avif" style={{ width: '100%', height: 'auto' }} alt="Menu" className="rounded-2" />
                      <p className="text-center">Explore Best Sellers</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown has-megamenu position-static nav-order">
                <NavLink
                  className="nav-link fw-medium d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" to="/grocery" onClick={() => toggleDropdown('grocery')} activeClassName="active">
                  GROCERY
                  {activeDropdown === 'grocery' ? (
                    <i className="fa fa-chevron-up ms-2 icons"></i>
                  ) : (
                    <i className="fa fa-chevron-down ms-2 icons"></i>
                  )}
                </NavLink>
                <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0   div-mega" style={{ zIndex: '1' }} >
                  <div className="container-fluid row row-cols-1  ">
                    <div className="col mb-3 container" id="grocery-div">
                      <ul className="list-unstyled">
                        <li className="dropdown-item fw-bold underline" href="#">VIEW ALL GROCERY PRODUCTS</li>
                        <li className="dropdown-item" href="#">Banana Pudding Cookies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown has-megamenu position-static nav-order">
                <NavLink
                  className="nav-link fw-medium d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" to="/visit" onClick={() => toggleDropdown('visit')} activeClassName="active">
                  VISIT US
                  {activeDropdown === 'visit' ? (
                    <i className="fa fa-chevron-up ms-2 icons"></i>
                  ) : (
                    <i className="fa fa-chevron-down ms-2 icons"></i>
                  )}
                </NavLink>
                <div
                  aria-labelledby="dropdownMenuButton1"  className="dropdown-menu border-0 p-3 m-0 div-mega"  style={{ zIndex: '1' }}  >
                  <div className="container-fluid row row-cols-1 row-cols-md-1 row-cols-lg-2 ">
                    <div className="col mb-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-item fw-bold underline" href="#">NEW YORK</li>
                        {data2.map((data,index)=>(
                          <li key={index}><a className="dropdown-item" href="#">{data.li}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div className="col mb-3">
                      <ul className=" list-unstyled">
                        <li className="dropdown-item fw-bold underline" href="#">CALIFORNIA</li>
                        <li className="dropdown-item" href="#">Los Angeles (West Hollywood)</li>
                        <li className="dropdown-item fw-bold underline" href="#">ILLINOIS</li>
                        <li className="dropdown-item" href="#">Chicago (Loop)</li>
                        <li className="dropdown-item fw-bold underline" href="#">INTERNATIONAL</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown has-megamenu position-static nav-about" >
                <NavLink
                  className="nav-link fw-medium d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" to="/about" onClick={() => toggleDropdown('about')} activeClassName="active">
                  ABOUT US
                  {activeDropdown === 'about' ? (
                    <i className="fa fa-chevron-up ms-2 icons"></i>
                  ) : (
                    <i className="fa fa-chevron-down ms-2 icons"></i>
                  )}
                </NavLink>
                <div
                  aria-labelledby="dropdownMenuButton1"
                  className="dropdown-menu border-0 m-0 y div-mega"
                  style={{ zIndex: '1' }}
                >
                  <div className="container-fluid row row-cols-1 row-cols-md-1 row-cols-lg-3">
                    <div className="col mb-3">
                      <ul className="list-unstyled mx-4">
                        <li ><Link className="dropdown-item fw-bold underline" to='/about' onClick={handleAbout}>AboutUs</Link></li>
                        <li className="dropdown-item" href="#">Careers</li>
                        <li className="dropdown-item" href="#">Our Story</li>
                      </ul>
                    </div>
                    <div className="col mb-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-item fw-bold underline" href="#">CONTACT US</li>
                      </ul>
                    </div>
                    <div className="col mb-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-item fw-bold underline" href="#">HELP CENTER</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item nav-btn">
                <button className="btn fw-bold" style={{ color: '#43234c', background: '#e7cbef' }}>PUDDING CLUB</button>
              </li>
            </ul>
            <div className="d-flex align-items-center nav-icons">
              <i className="fa-solid fa-magnifying-glass mx-2 border border-dark rounded-circle p-1 search" style={{ fontSize: "13px" }}></i>
              <Link className="" to='/login'><i className="fa-regular fa-user mx-2 border border-dark rounded-circle p-1 text-dark" style={{ fontSize: "15px" }} onClick={handleLogin}></i><span className='text-dark login-icon fw-bold  ' style={{ fontSize: "18px", marginLeft: "0px" }}>LOGIN </span></Link>
              <i className="fa-solid fa-cart-shopping mx-2 border border-dark rounded-circle p-1 shop" style={{ fontSize: "15px" }}></i>
            </div>
          </div>
        </div>
      </div>

    </nav>
  </div>
  );
}
export default MegaMenu;
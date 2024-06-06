import React, { useState, useEffect } from 'react';
import Component3 from './ordercomp3';
import { connect } from 'react-redux';
import { getDataError, getDataStart, getDataSuccess } from '../../redux/action/get_action';
import { getProjectData } from '../../redux/Api/project_api';
import { useParams } from 'react-router-dom';

const Component2 = ({ dispatch, componentData, loading }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [modal, setModal] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const label = [
    { p: 'BestSeller' },
    { p: 'Price: Low-High' },
    { p: 'Price: High-Low' }
  ];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setSpinner(true);
    dispatch(getDataStart());
    try {
      const dataget = await getProjectData();
      dispatch(getDataSuccess(dataget));
    } catch (error) {
      dispatch(getDataError(error));
    }
    setSpinner(false);
  };

  const param = useParams();
  const id = param.id;
  const imgdata =  componentData.filter((item) => item.status === id) ;
  console.log('this is main data --->', imgdata);
   
  const handModal = () => {
    toggleDropdown('filter');
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    
    setActiveDropdown(null);
  };

  return (
    <>
      <div className='container-fluid w-100 h-100 mt-5 d-flex justify-content-between p-5 d-none d-md-flex'>
        <div className='w-25 h-100'>
          <h2 className='border-bottom d-flex justify-content-between'> Filter By<span className='text-decoration-underline' style={{ fontSize: '20px', color: 'gray' }}> Clear all </span></h2>

          <ul className="navbar-nav ">
            <li className="nav-item ">
              <div
                className="nav-link fw-medium d-flex align-items-center justify-content-between border-bottom"
                onClick={() => toggleDropdown('pickup')}
              >
                PICKUP/DELIVERY
                <div>
                  {activeDropdown === 'pickup' ? (
                    <i className="fa fa-chevron-up ms-2 icons"></i>
                  ) : (
                    <i className="fa fa-chevron-down ms-2 icons"></i>
                  )}
                </div>
              </div>
              {activeDropdown === 'pickup' && (
                <div className="dropdown-menu border-0 p-0 m-0 show" style={{ zIndex: '1' }}>
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item fw-bold underline" href="#">NationWide Shipping</a></li>
                        <li><a className="dropdown-item" href="#">Local pick up</a></li>
                      </ul>
                    </div>
                  
              )}
            </li>
            <li className="nav-item">
              <div
                className="nav-link fw-medium d-flex align-items-center justify-content-between border-bottom"
                onClick={() => toggleDropdown('type')}
              >
                TYPE
                {activeDropdown === 'type' ? (
                  <i className="fa fa-chevron-up ms-2 icons"></i>
                ) : (
                  <i className="fa fa-chevron-down ms-2 icons"></i>
                )}
              </div>
              {activeDropdown === 'type' && (
                <div className="dropdown-menu border-0 show" style={{ zIndex: '1' }}>
                      <ul className="list-unstyled">
                        <li className="dropdown-item">Bananapudding</li>
                        <li className="dropdown-item">Sampler pack</li>
                      </ul>
                    </div>
              )}
            </li>
            <li className="nav-item">
              <div
                className="nav-link fw-medium d-flex align-items-center justify-content-between border-bottom"
                onClick={() => toggleDropdown('flavor')}
              >
                FLAVOR
                {activeDropdown === 'flavor' ? (
                  <i className="fa fa-chevron-up ms-2 icons"></i>
                ) : (
                  <i className="fa fa-chevron-down ms-2 icons"></i>
                )}
              </div>
              {activeDropdown === 'flavor' && (
                <div className="dropdown-menu border-0 p-0 m-0 show" style={{ zIndex: '1' }}>
                      <ul className="list-unstyled">
                        <li className="dropdown-item">Banana</li>
                        <li className="dropdown-item">Chocolate</li>
                      </ul>
                    </div>
              )}
            </li>
          </ul>
        </div>
    
        <div className='container w-75 h-100'>

              <div className='container h-25 d-flex  justify-content-end p-3 mb-5'>
                <ul className='list-unstyled'>
                <li className="nav-item position-relative">
                  <div className="nav-link fw-medium d-flex justify-content-between" onClick={() => toggleDropdown('recomend')}>
                      <span className="border border-dark p-3">
                          RECOMMENDED
                          {activeDropdown === 'recomend' ? (
                              <i className="fa fa-chevron-up ms-2 icons"></i>
                          ) : (
                              <i className="fa fa-chevron-down ms-2 icons"></i>
                          )}
                      </span>
                  </div>
                  {activeDropdown === 'recomend' && (
                      <div className="dropdown-menu show" style={{ position: 'absolute', right: 0 }}>
                          <div className="form-check"style={{background:'#bae8d4'}} >
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                              <label className="form-check-label" htmlFor="flexRadioDefault1">
                                  Recommended
                              </label>
                          </div>
                          {label.map((item,index)=>(
                                 <div className="form-check" key={index}>
                                 <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                 <label className="form-check-label" htmlFor="flexRadioDefault2">
                                     {item.p}
                                 </label>
                             </div>
                        ))}
                        </div>
                      )}
                  </li>


                </ul>
            </div>
              <div className='container h-75 '><Component3  data={imgdata}/></div>
          </div> 
        </div>

  <div className='container-fluid mt-5 w-100 d-flex justify-content-between  d-sm-block d-md-none'>
        <div className='  w-45'>
      <div className="nav-link fw-medium d-flex justify-content-between">
        <span className="border border-dark p-2 px-3" onClick={handModal}>
          Filter
          {activeDropdown === 'filter' ? (
            <i className="fa fa-chevron-up ms-2 icons" onClick={closeModal}></i>
          ) : (
            <i className="fa fa-chevron-down ms-2 icons " ></i>
          )}
        </span>
      </div>

      {modal && (

      <div className="modal d-block mt-5" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between" style={{background:'#bae8d4'}}>
        
            <button type="button" className="btn border border-dark px-4" style={{color:'#013609'}}>Clear all</button>
            <button type="button" className="btn border border-dark px-5" onClick={closeModal} style={{background:'#013609', color:'#bae8d4'}}>Done</button>
         
          </div>
            <ul className="navbar-nav p-2">
                <li className="nav-item">
                  <div
                    className="nav-link fw-medium d-flex align-items-center justify-content-between border-bottom"
                    onClick={() => toggleDropdown('pickup')}
                  >
                    PICKUP/DELIVERY
                    <div>
                      {activeDropdown === 'pickup' ? (
                        <i className="fa fa-chevron-up ms-2 icons" ></i>
                      ) : (
                        <i className="fa fa-chevron-down ms-2 icons"></i>
                      )}
                    </div>
                  </div>
                  {activeDropdown === 'pickup' && (
                    <div className="dropdown-menu border-0 p-0 m-0 show" style={{ zIndex: '1' }}>
                      <ul className="list-unstyled">
                        <li><a className="dropdown-item fw-bold underline" href="#">NationWide Shipping</a></li>
                        <li><a className="dropdown-item" href="#">Local pick up</a></li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="nav-item">
              <div
                className="nav-link fw-medium d-flex align-items-center justify-content-between border-bottom"
                onClick={() => toggleDropdown('type')}
              >
                TYPE
                {activeDropdown === 'type' ? (
                  <i className="fa fa-chevron-up ms-2 icons"></i>
                ) : (
                  <i className="fa fa-chevron-down ms-2 icons"></i>
                )}
              </div>
              {activeDropdown === 'type' && (
                <div className="dropdown-menu border-0 show" style={{ zIndex: '1' }}>
                      <ul className="list-unstyled">
                        <li className="dropdown-item">Bananapudding</li>
                        <li className="dropdown-item">Sampler pack</li>
                      </ul>
                    </div>
              )}
            </li>
            <li className="nav-item">
              <div
                className="nav-link fw-medium d-flex align-items-center justify-content-between border-bottom"
                onClick={() => toggleDropdown('flavor')}
              >
                FLAVOR
                {activeDropdown === 'flavor' ? (
                  <i className="fa fa-chevron-up ms-2 icons"></i>
                ) : (
                  <i className="fa fa-chevron-down ms-2 icons"></i>
                )}
              </div>
              {activeDropdown === 'flavor' && (
                <div className="dropdown-menu border-0 p-0 m-0 show" style={{ zIndex: '1' }}>
                      <ul className="list-unstyled">
                        <li className="dropdown-item">Banana</li>
                        <li className="dropdown-item">Chocolate</li>
                      </ul>
                    </div>
              )}
            </li>
              </ul>
         
        </div>
      </div>
      </div>
      
      )}
     </div>
    
        <div className=' w-55'>

             <div className=''>
               <ul className='list-unstyled'>
               <li className="nav-item position-relative">
                <div className="nav-link fw-medium d-flex justify-content-between" onClick={() => toggleDropdown('recomend')}>
                    <span className="border border-dark p-2">
                        RECOMMENDED
                        {activeDropdown === 'recomend' ? (
                            <i className="fa fa-chevron-up ms-2 icons"></i>
                        ) : (
                            <i className="fa fa-chevron-down ms-2 icons"></i>
                        )}
                    </span>
                </div>
                {activeDropdown === 'recomend' && (
                    <div className="dropdown-menu show" style={{ position: 'absolute', right: 0 }}>
                        <div className="form-check"style={{background:'#bae8d4'}}>
                            <input className="form-check-input border border-dark" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1 " >
                                Recommended
                            </label>
                        </div>
                        {label.map((item,index)=>(
                                 <div className="form-check" key={index}>
                                 <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                 <label className="form-check-label" htmlFor="flexRadioDefault2">
                                     {item.p}
                                 </label>
                             </div>
                        ))}
                      </div>
                    )}
                </li>
            </ul>
         </div>        
         </div>
      </div>
      {spinner  ?
      (<div className="d-flex justify-content-center align-items-center">
          <img src='./assets/spinner-3.gif' alt="Loading..." />
        </div>):
        (<div className='d-sm-block d-md-none'>
        <h1>Worlf-Famous Banana pudding</h1>
        <div class=" mb-3 " style={{maxWidth: "540px"}}>
          <div class="row g-0 ">
        {componentData.map((item, index) => (
          <>
            <div class="col-4 border-bottom mb-2"key={index} >
              <img src={item.image} class="img-fluid rounded-start" alt="..."/>
              <h6 className="card-title text-center p-2 cardtext" style={{background:'#f5faf6'}} >SHIPPING ONLY"</h6>
            </div>
            <div class="col-8 border-bottom mb-2 p-2">
              <div class="card-body">
              
              <h5 className='text-start '>World-Famous Banana Pudding Variety Multipack</h5>
                <p className='text-start'>This online exclusive variety pack combines three of our most popular world-famous </p>
                    <p className='text-start'>Starting at $64</p>
              </div>
            </div>
          </>
          ))}
        </div>
   </div>
   </div>)}
    </>
  );
}
const mapStateToProps = (state) => ({
  componentData: state.getdatainformation.componentData,
  loading: state.getdatainformation.loading,
  error: state.getdatainformation.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Component2);




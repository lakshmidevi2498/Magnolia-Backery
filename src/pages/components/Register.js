import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Smnavbar from './Smnavbar';
import MegaMenu from './navbar';
import Input from './input';
import Footer from './footer';
import auth from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        fname: '',
        sname: '',
        email: '',
        dob: '',
        password: '',
        cPassword: '',
        radio: false
    });
    const { fname, sname, email, dob, password, cPassword, radio } = data;
    
    const [modal, setModal] = useState(false);
    const [errors, setErrors] = useState({
        fnameError: false,
        snameError: false,
        emailError: false,
        dobError: false,
        passwordError: false,
        cPasswordError: false,
        radioError: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleCreate = async (e) => {
        e.preventDefault();

        const isFnameValid = validateFname(fname);
        const isSnameValid = validateSname(sname);
        const isEmailValid = validateEmail(email);
        const isDobValid = validateDob(dob);
        const isPasswordValid = validatePassword(password);
        const isCpasswordValid = validateCpassword(cPassword);
        const isRadioValid = validateRadio(radio);

        if (isFnameValid && isSnameValid && isEmailValid && isDobValid && isPasswordValid && isCpasswordValid && isRadioValid) {
            setModal(true);
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                setData({
                    fname: '',
                    sname: '',
                    email: '',
                    dob: '',
                    password: '',
                    cPassword: '',
                    radio: false
                });
                navigate('/');
            } catch (error) {
                console.log(error);
            }
        } else {
            setModal(false);
        }
    };

    const validateFname = (fname) => {
        if (fname === "") {
            setErrors((prevErrors) => ({ ...prevErrors, fnameError: true }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, fnameError: false }));
            return true;
        }
    };

    const validateSname = (sname) => {
        if (sname === "") {
            setErrors((prevErrors) => ({ ...prevErrors, snameError: true }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, snameError: false }));
            return true;
        }
    };

    const validateEmail = (email) => {
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailFormat)) {
            setErrors((prevErrors) => ({ ...prevErrors, emailError: true }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, emailError: false }));
            return true;
        }
    };

    const validateDob = (dob) => {
        if (dob === "") {
            setErrors((prevErrors) => ({ ...prevErrors, dobError: true }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, dobError: false }));
            return true;
        }
    };

    const validatePassword = (password) => {
        if (password === "" || password.length < 6) {
            setErrors((prevErrors) => ({ ...prevErrors, passwordError: true }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, passwordError: false }));
            return true;
        }
    };

    const validateCpassword = (cPassword) => {
        if (cPassword === "" || cPassword !== password) {
            setErrors((prevErrors) => ({ ...prevErrors, cPasswordError: true }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, cPasswordError: false }));
            return true;
        }
    };

    const validateRadio = (radio) => {
        if (!radio) {
            setErrors((prevErrors) => ({ ...prevErrors, radioError: true }));
            return false;
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, radioError: false }));
            return true;
        }
    };

    return (
        <>
            <Smnavbar />
            <MegaMenu />
            <div className='container-fluid d-flex justify-content-between my-1 my-md-5  '>
              <div className='row'>
                    <div className='container order-2 order-md-1 text-white fw-bold col-12 col-md-6 '>
                        <div className='login-card p-3' style={{backgroundImage: 'url("./assets/images/createimg.jpg")', backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
                            <h1 className='text-center mb-3'>Create Account</h1>
                            <div className='d-flex justify-content-between mt-1 mt-md-5 row'>
                                <div className='form-group col-12 col-md-6'>
                                    <label htmlFor="fname" className='formtext'>FIRSTNAME</label>
                                    <input className='form-control' type='text' name='fname' value={fname} onChange={handleChange} />
                                    {errors.fnameError && <p className='text-danger'>Enter FIRSTNAME</p>}
                                </div>
                                <div className='form-group col-12 col-md-6'>
                                    <label htmlFor="sname" className='formtext'>SECOND NAME</label>
                                    <input className='form-control' type='text' name='sname' value={sname} onChange={handleChange} />
                                    {errors.snameError && <p className='text-danger'>Enter SECOND NAME</p>}
                                </div>
                            </div>
                            
                            <div className='form-group mt-3'>
                                <label htmlFor="email" className='formtext'>E-mail</label>
                                <input className='form-control'  type='text' name='email' value={email} onChange={handleChange} />
                                {errors.emailError && <p className='text-danger'>Enter Valid Email</p>}
                            </div>
                            <div className='form-group mt-3'>
                                <label htmlFor="dob" className='formtext'>D-O-B</label>
                                <input  className='form-control position-relative'  type='date'  name='dob'  value={dob}  onChange={handleChange} />
                                {errors.dobError && <p className='text-danger'>Enter DOB</p>}
                            </div>

                            <div className='d-flex justify-content-between mt-1 mt-md-5 row'>
                                <div className='form-group col-12 col-md-6'>
                                    <label htmlFor="password" className='formtext'>PASSWORD</label>
                                    <input  className='form-control'  type='password' name='password'  value={password}  onChange={handleChange}  />
                                    {errors.passwordError && <p className='text-danger'>Enter valid password</p>}
                                </div>
                                <div className='form-group col-12 col-md-6'>
                                    <label htmlFor="cPassword" className='formtext'>CONFIRM PASSWORD</label>
                                    <input  className='form-control' type='password'  name='cPassword' value={cPassword}  onChange={handleChange}  />
                                    {errors.cPasswordError && <p className='text-danger'>Enter Correct password</p>}
                                </div>
                            </div>
                            
                            <label style={{ fontSize: '10px' }}>
                                <input   type="checkbox"  name='radio'  checked={radio}  onChange={handleChange} /> KEEP ME UP TO DATE ON NEWS AND EXCLUSIVE OFFERS.
                            </label>
                            {errors.radioError && <p className='text-danger'>Please select an option</p>}

                            <div className='text-end mt-3'>
                                <button className='btn btn-primary px-5' onClick={handleCreate}>Create</button>
                                <h6 className='mt-2 fw-bold'>If you already have an account, login here</h6>
                            </div>
                        </div>
                    </div>
                    <div className='container order-1 order-md-2 col-12 col-md-6 mt-1 mt-md-5 mb-1 '>
                        
                            <img src='./assets/images/createimg2.webp' className='mt-0 mt-md-5 w-100 h-auto'  style={{  maxWidth:'100%',height: 'auto' }}  alt='Logo' />
                      
                    </div>              
                {modal && (
                    <div className="modal show" style={{ display: "block" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal">
                                    <h5 className="modal-title">Success</h5>
                                    <button type="button" className="btn-close" onClick={() => setModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <p className='fs-5'>Your Account was successfully created.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-info" onClick={() => setModal(false)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
            <Input/>
            <Footer/>
        </>
    );
};
export default Register;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import { FacebookAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';



import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [modal, setModal] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const name=localStorage.getItem("name")

    const data1=[
        {id:"1",li:"Date"},
        {id:"2",li:"Order#"},
        {id:"3",li:"Total"},
        {id:"4",li:"Status"},
      ]



    useEffect(() => {
        auth.onAuthStateChanged(person => {
            if (person) {
                setUser(person);
            } else {
                setUser(null);
            }
        });
    }, []);

    const handleGoogle=async()=>{
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
       
           const response = await signInWithPopup(auth, provider);

           console.log('this is google --->', response);
           localStorage.setItem('token', response.user.accessToken);
           localStorage.setItem('email', response.user.email);
           localStorage.setItem('name',response.user.displayName)

        
    };

    const handleFacebook=()=>{
        const providerFb = new FacebookAuthProvider();
        signInWithPopup(auth, providerFb)
        .then((result) => {
          console.log(result, 'result is this')
      
          const name = result.user.displayName;
          const email = result.user.email;
          const profilePic = result.user.photoURL;  
          localStorage.setItem("name", name);
          console.log("name is --->", name)
          localStorage.setItem("email", email);
          console.log("email is --->", email)
          localStorage.setItem("profilePic", profilePic);})
        .catch((err)=>console.log(err))
    };

    const handleSubmit = () => {
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        if (isEmailValid && isPasswordValid) {
            signInWithEmailAndPassword(auth, email, password)
                .then(user => {
                    setModal(true);
                    console.log("this is email&password response...>",user);
                    console.log(user._tokenResponse.email)
                    const email=user._tokenResponse.email
                    localStorage.setItem('email',email);
                    setEmail('');
                     setPassword('');
                      navigate('/');
                })
                .catch(err => {
                    console.log(err);
                    setModal(false);
                });
        }
    };
    const handleRegister=()=>{
        navigate("/register")
    }

    const handleLogout = () => {
        signOut(auth)
        setUser(null);
    };

    const validateEmail = (email) => {
        const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailformat)) {
            setEmailError(true);
            return false;
        } else {
            setEmailError(false);
            return true;
        }
    };

    const validatePassword = (password) => {
        if (password.length < 6) {
            setPasswordError(true);
            return false;
        } else {
            setPasswordError(false);
            return true;
        }
    };

    return (
        
        <>
               {user ? (
                <div className='container-fuid m-0 p-0'>
                    <div className='border  container-fluid' style={{ background: '#bae8d4' }}>
                        <h1 className='text-center p-5' style={{ fontSize: '70px', color: '#013609' }}>
                            My Account
                        </h1>
                        <p className='text-end m-2'>{name}</p>
                    </div>
                    <div>
                    <div className='text-danger m-auto d-block align-items-center text-center mt-3'>
                            <div className='row col-12'>
                                <ul className='list-unstyled d-flex flex-wrap justify-content-center col-12'  style={{fontSize:'15px'}}>
                                    <li className="col-12 col-md-2  mx-3  border-bottom border-danger" >ORDER HISTORY</li>
                                    <li className="col-12 col-md-2  mx-3 mt-3 mt-md-0 border-bottom " >MANAGE SUBSCRIPTION</li>
                                    <li className="col-12 col-md-2  mx-3 mt-3 mt-md-0 border-bottom"  >CHANGE PASSWORD</li>
                                    <li className="col-12 col-md-2  mx-3 mt-3 mt-md-0 border-bottom" onClick={handleLogout} style={{cursor: 'pointer'}}>LOGOUT</li>
                                </ul>
                            </div>
                    </div>

                        <h1 className="m-5 fs-1 fw-bold ">Order History</h1>
                        <div className="container ">
                            <div className='mx-5 border-top border-bottom text-align-center text-center mb-3'>
                            <ul className="list-unstyled d-flex justify-content-between" >
                                {data1.map((data,index)=>(    
                                    <li className='fs-md-4 fs-5' key={index}>{data.li}</li>     
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='container-fluid'>
                <div className='row d-flex justify-content-between mt-1 mt-md-5'>
                    <div className='col-12 col-md-6 order-2 order-md-1'>
                        <div className='login-card p-5 text-light' style={{ backgroundImage: 'url("./assets/images/loginimg.jpeg")' }}>
                            <h1 className='text-center text-dark'>Login</h1>
                            <div className='form-group'>
                                <label>E-mail</label>
                                <input
                                    className='form-control'
                                    type='text'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <p className='text-danger'>Enter Valid Email</p>}
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input
                                    className='form-control'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && <p className='text-danger'>Enter valid password</p>}
                            </div>
                            <div className='text-center col-12 col-md-6'>
                                <h6 className='mt-2 fw-bold  d-block signtext' onClick={handleGoogle}style={{ cursor: 'pointer' }}>Signup with Google &nbsp;<i class="fa-brands fa-google-plus-g text-danger" ></i></h6>
                            </div>
                            <div className='text-center col-12 col-md-6'>
                                <h6 className='mt-2 fw-bold  signtext' onClick={handleFacebook}style={{ cursor: 'pointer' }}>Signup with Facebook &nbsp;<i class="fa-brands fa-facebook text-primary" ></i></h6>
                            </div>
                            <div className='text-end'>
                                <button className='btn btn-primary' onClick={handleSubmit} style={{ cursor: 'pointer' }}>SIGN IN</button>
                                <h6 className='mt-2 fw-bold'>Forget Your Password?</h6>
                                <h6 className='fw-bold' style={{ cursor: 'pointer' }} onClick={handleRegister}>Create Account</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 order-1 order-md-2'>
                        <div className='p-5'>
                            <img
                                src='./assets/images/logimg2.webp'
                                className='mt-0 mt-md-5'
                                style={{ maxWidth: '100%', height: 'auto' }}
                                alt='Logo'
                            />
                        </div>
                    </div>
                </div>
                </div>
            )}
            {modal && (
                <div className="modal show" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Success</h5>
                                <button type="button" className="btn-close" onClick={() => setModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p className='fs-5'>Your sign in is successfully completed.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" onClick={() => setModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
       </>
    );
};

export default Form;

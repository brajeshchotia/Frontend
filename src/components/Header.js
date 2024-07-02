import React from 'react'
import '../Styles/Header.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
// import MiddlePart from './MiddlePart';

import AnjanaLogo from '../Assets/AnjanaLogo.png'

const constants = require('../constants')
const API_URL = constants.API_URL;


const containerfirst = {

    // backgroundColor: 'rgb(29, 29, 41)'

    backgroundColor: 'black',


}

const collapse = {
    marginLeft: '70px'
}

const SignUpstyle = {
    width: '100px'
}




// const nopadding = {
//     padding: '0px',

// }



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '350px'
    },
};

Modal.setAppElement('#root'); // Add this line to avoid accessibility issues







export default function Header() {

    const handleClick = useNavigate();
    const navigate = (pathname) => {
        handleClick(pathname);
    }


    const [isOpenSignUpModal, modalOpen] = React.useState(false)

    const signupmodalopen = (event) => {
        event.stopPropagation(); // Prevent event bubbling
        modalOpen(true)
        // alert("For SignUp: \n Step:1: Click on Logo or BE ON Home Page\n Step:2  Click on Contact Us Which is on Header  \n Step:3 Click on SignUp  ")
        // window.location.hash = '#';

    }



    const closeModalset = () => {

        modalOpen(false)
    }
    const [isOpenLoginModal, modalloginOpen] = React.useState(false)

    const loginmodalopen = () => {
        modalloginOpen(true)
    }

    const closeLoginModalset = () => {
        modalloginOpen(false)
    }

    const toggleAuthLogin = () => {
        modalloginOpen(true)
        modalOpen(false)
    }

    const toggleAuthSignup = () => {
        modalOpen(true)
        modalloginOpen(false)
    }

    const [User, setUser] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        user: undefined,
        isLoggedin: false,
        loginError: undefined,
        signUpError: undefined

    })


    const signUphandler = () => {
        // for server
        console.log(User)
        const obj = {
            email: User.email,
            password: User.password,
            firstName: User.firstName,
            lastName: User.lastName

        };

        axios({
            method: 'POST',
            url: `${API_URL}/signUp`,
            // url: 'http://localhost:4000/login',
            header: { 'Content-Type': 'application/json' },
            data: obj
        }).then(response => {

            localStorage.setItem("user", JSON.stringify(response.data.user[0]));
            localStorage.setItem('isLoggedin', true)

            setUser({
                user: response.data.user[0],
                isLoggedin: true,
                loginError: undefined,

            })


        }).catch(error => {

            setUser({
                ...User,
                isLoggedin: false,
                loginError: "user name and password is wrong"
            })
        })
        modalOpen(false)

    }

    const Loginshandler = () => {
        // for server
        // const { email, password } = User
        console.log(User)
        const obj = {
            email: User.email,
            password: User.password,

        };

        axios({
            method: 'POST',
            url: `${API_URL}/login`,
            // url: 'http://localhost:4000/login',
            header: { 'Content-Type': 'application/json' },
            data: obj
        }).then(response => {
            localStorage.setItem("user", JSON.stringify(response.data.user[0]));
            localStorage.setItem('isLoggedin', true)
            setUser({
                user: response.data.user[0],
                isLoggedin: true,
                loginError: undefined,
            })

        }).catch(error => {
            alert("User name and password is wrong")
            // setErrMsg("User name and password is wrong")
            setUser({
                ...User,
                isLoggedin: false,
                loginError: "user name and password is wrong"

            })
        })

        modalloginOpen(false)
    }

    const handleChange = (e, field) => {
        const val = e.target.value;
        setUser({
            ...User,
            [field]: val,

            loginError: undefined,
            signUpError: undefined
        })


    }

    const signUpCancelHandler = () => {
        modalOpen(false)
    }

    const loginCancelHandler = () => {
        modalloginOpen(false)
    }

    const responseFacebook = (data) => {
        // for server
        debugger

        // Can i use here login and signup api?
    }

    const responseGoogle = (data) => {
        // for server
        debugger


    }

    const Logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('isLoggedin')
        setUser({
            user: undefined,
            isLoggedin: false
        })
    }


    const [isOpenpasswordModal, modalpasswordOpen] = React.useState(false)

    const passwordHandler = () => {
        modalpasswordOpen(true)
        modalloginOpen(false)


    }

    const ResetCancel = () => {
        modalpasswordOpen(false)

    }


    const resetHandler = () => {
        const obj = {
            email: User.email
        };

        axios({
            method: 'POST',
            url: `${API_URL}/SendMailForResetPassword`,
            // url: 'http://localhost:4000/login',
            header: { 'Content-Type': 'application/json' },
            data: obj
        }).then(response => {
            localStorage.setItem("user", JSON.stringify(response.data.user[0]));
            localStorage.setItem('isLoggedin', true)
            setUser({
                user: response.data.user[0],
                isLoggedin: true,
                loginError: undefined,

            })

        }).catch(error => {
            // alert("Pleae Check Your Email")
            // setErrMsg("User name and password is wrong")
            setUser({
                ...User,
                isLoggedin: false,

                loginError: "User does not exist"

            })
        })

        modalpasswordOpen(false)
    }

    return (
        <div className='firstbar'>
            <div className="container-fluid" id="nopadding" >
                <nav className="navbar navbar-expand-lg   fixed-top"  >
                    <div className="container-fluid p-2 mb-2 " style={containerfirst}>
                        {/* <div className="ancortag" onClick={() => navigate('/')}> <a className="navbar-brand" href="" >U!</a></div>  */}
                        <div className="ancortag" onClick={() => navigate('/')}><img src={AnjanaLogo} className='LogoStyle' alt='Server issue' /></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" id='toggleStyle'
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <i class="bi bi-list"></i>
                        </button>
                       
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={collapse}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="clicking">
                                {/* <li className="nav-item" >
                                    <a className="nav-link active text-white" aria-current="page" href="http://localhost:3000/">HOME</a>
                                </li> */}

                                <li className="nav-item" >
                                    <a className="nav-link active text-white" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation" onClick={() => handleClick('/What We Do')}>What we do</a>
                                </li>

                                <li className="nav-item" >
                                    <a className="nav-link active text-white" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation" onClick={() => handleClick('/Who We Are')}>Who we are</a>
                                </li>


                                {/* <li className="nav-item" >
                                <a className="nav-link text-white" href="#"></a>
                           </li>  */}
                                <li className="nav-item dropdown ">
                                    <a className="nav-link text-white" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Career
                                    </a>
                                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown"
                                        id="dropdown" >
                                        <li><a className="dropdown-item" href="#" id="dropdwonitem"  >Technical</a></li>
                                        <li><a className="dropdown-item" href="#" id="dropdwonitem"  >Non-Technical</a></li>
                                        <li>
                                            <hr className="dropdown-divider" id="dropdowndriver" />
                                        </li>
                                        <li><a className="dropdown-item" href="#" id="dropdwonite" >Other</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item " >
                                    {/* tabindex="-1"  */}
                                    {/* aria-disabled="true" */}
                                    <a className="nav-link text-white" href='#godcontact' >Contact Us</a>
                                </li>
                            </ul>

                            <div className='d-flex'>
                                {
                                    User.isLoggedin
                                        ?
                                        <>
                                            <span className='bi bi-person-circle' style={{ marginRight: '20px', padding: '5px', color: 'white' }} > {User.user.firstName}</span>
                                            <button className="btn btn-outline-success" onClick={Logout} style={SignUpstyle} type="submit">Logout</button>
                                        </>
                                        :
                                        <>
                                            <button className='btn btn-outline-success me-4' onClick={signupmodalopen} style={SignUpstyle} type="submit" >SignUp</button>
                                            <button className="btn btn-outline-success" onClick={loginmodalopen} style={SignUpstyle} type="submit">Login</button>
                                        </>
                                }
                            </div>


                            <Modal isOpen={isOpenSignUpModal} style={customStyles} >
                                <h2 className='Main-Heading '>Create An Account
                                    <button className='float-end btn btn-close mt-2' onClick={closeModalset}></button>
                                </h2>
                                <br />
                                <form>
                                    <input className='form-control mb-1' type='text' value={User.firstName} placeholder='Firstname' onChange={(e) => handleChange(e, 'firstName')} />
                                    <input className='form-control mb-1' type='text' value={User.lastName} placeholder='Lastname' onChange={(e) => handleChange(e, 'lastName')} />
                                    <input className='form-control mb-1' type='text' value={User.email} placeholder='Email' onChange={(e) => handleChange(e, 'email')} />
                                    <input className='form-control mb-1' type='password' value={User.password} placeholder='Passwrod' onChange={(e) => handleChange(e, 'password')} />
                                    {/* <button className='btn btn-success form-control mb-1' onClick={signUphandler}> SignUp</button> */}
                                    <input type="button" className='btn btn-success form-control mb-1' onClick={signUphandler} value="SignUp" />
                                    <button className='cancelclass' onClick={signUpCancelHandler}> Cancel</button>

                                </form>
                                <br />
                                <div className='text-center'>
                                    <FacebookLogin
                                        appId="2826455270831303"
                                        textButton='Continue with Facebook'
                                        autoLoad={false}
                                        fields="firstName, lastName, email, password"
                                        callback={responseFacebook}
                                        cssClass="my-facebook-button-class"
                                        icon="fa-facebook"
                                    />
                                    <br />
                                    <br />
                                    <GoogleLogin
                                        clientId="961962132806-80psd9gpb43bbt56r0v1e88gcce1nd7f.apps.googleusercontent.com"
                                        textButton='Continue with Google'
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        className='my-facebook-button-class '
                                    />
                                </div>
                                <br />
                                <hr />

                                <div className='bottom-text'>
                                    Already have an account?
                                    <button className='SignUpclass' onClick={toggleAuthLogin} >Login</button>
                                </div>
                            </Modal>

                            <Modal isOpen={isOpenLoginModal} style={customStyles} >
                                <h2 className='Main-Heading'>Login
                                    <button className='float-end btn btn-close mt-2' onClick={closeLoginModalset}></button>
                                </h2>
                                <br />
                                <form>
                                    <input className='form-control mb-1' type='text' value={User.email} placeholder='Email' required onChange={(e) => { handleChange(e, 'email') }} />
                                    <input className='form-control mb-1' type='password' value={User.password} placeholder='Passwrod' required onChange={(e) => { handleChange(e, 'password') }} />

                                    {/* <button className='btn btn-success form-control mb-1' onClick={Loginshandler}> Login</button> */}
                                    <input type='button' className='btn btn-success form-control mb-1' onClick={Loginshandler} value="Login" />

                                    <button className='cancelclass' onClick={loginCancelHandler}> Cancel</button>
                                </form>

                                <br />

                                <FacebookLogin
                                    appId="2826455270831303"
                                    textButton='Continue with Facebook'
                                    autoLoad={true}
                                    fields="email, password"
                                    callback={responseFacebook}
                                    cssClass="my-facebook-button-class"
                                    icon="fa-facebook"
                                />
                                <br />
                                <br />
                                <GoogleLogin
                                    clientId="961962132806-80psd9gpb43bbt56r0v1e88gcce1nd7f.apps.googleusercontent.com"
                                    textButton='Continue with Google'
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    className='my-facebook-button-class'
                                />
                                <br />
                                <hr />

                                <div className='bottom-text'>
                                    Don't have an account?
                                    <button className='SignUpclass' onClick={toggleAuthSignup}>SignUp</button>
                                </div>

                                <button className='Resethandler' onClick={passwordHandler}>ForgotPassword?</button>

                            </Modal>

                            <Modal isOpen={isOpenpasswordModal} style={customStyles} >
                                <h2 className='Main-Heading'>Type Email</h2>
                                <br />
                                <form>
                                    <input className='form-control mb-1' type='text' value={User.email} placeholder='Email' onChange={(e) => handleChange(e, 'email')} />
                                    <br />
                                    <input type="button" className='btn btn-success form-control mb-1' onClick={resetHandler} value="Click Here" />
                                    <button className='Resethandler' onClick={ResetCancel}>Cancel</button>
                                </form>

                            </Modal>


                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}

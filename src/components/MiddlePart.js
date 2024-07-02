import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import BackgroundSecond from '../Assets/BackgroundSecond.jpg'
import BackgroundThird from '../Assets/BackgroundThird.jpg'


import RealFrontImage from '../Assets/RealFrontImage.jpg'
import Backsec from '../Assets/Backsec.jpeg'
import ExcelImg from '../Assets/ExcelImg.png'
import PythonImg from '../Assets/PythonImg.jpg'

import PS from '../Assets/PS.jpg'
import AnjanaLogo from '../Assets/AnjanaLogo.png'


import '../Styles/middlepart.css'
import axios from 'axios';
const constants = require('../constants')
const API_URL = constants.API_URL;



export default function MiddlePart() {

    const handleClick = useNavigate();
    const navigate = (pathname) => {
        handleClick(pathname);
    }



    const [User, setUser] = React.useState({
        email: " ",
        phoneNo: " ",
        Name: " ",
        text: " "
    });


    const UserqueryHandlers = () => {
        // for server
        console.log(User)
        const obj = {

            email: User.email,
            phoneNo: User.phoneNo,
            Name: User.Name,
            text: User.text

        };

        axios({
            method: 'POST',
            url: `${API_URL}/contactpart`,
            // url: 'http://localhost:4000/login',
            header: { 'Content-Type': 'application/json' },
            data: obj
        }).then(response => {

            localStorage.setItem("user", JSON.stringify(response.data.user[0]));


            setUser({
                user: response.data.user[0],


            })
      



        }).catch(error => {
            alert("User query registered successfully !")
            
            setUser({
                ...User,


            })

            window.location.reload(false)
        })
    

    }



    const handleChange = (e, field) => {
        const val = e.target.value;
        setUser({
            ...User,
            [field]: val,


        })

        

    }


    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;

    };


    return (
        <div className='MiddleSections' >
            <div className="container-fluid noo-padding">
                <div className="topSection">
                    {/* <img src={currentImageUrl} className="topPart" /> */}
                    <video loop muted autoPlay className='topPart'>
                    <source
                        src="https://addons-media.operacdn.com/media/themes/54/226654/1.0-rev1/animations/video_preview.webm"
                        type="video/webm"
                    />
                  
                </video>
                </div>
                
                <div className="container-fluid yes-padding">
                    <h1 className="Headline">
                        Transformation starts here !
                        <h6>Ready to change the game?</h6>
                    </h1>
                </div>

            </div>
            
            <div className="container no-padding">
                <br />
                <h1 className="bottom-header">Search Quickly Services</h1>
                <h3 className="bottom-subheader">Discover the key to unlocking your business's full potential - join us</h3>
                <br />
                <br/>
                <div className="row">

                    <div className="qs-box col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 " onClick={() => navigate('/Frontendsample')}>
                        <div className="qs-box-items" >
                            <div className="image row"  >
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <img src={RealFrontImage} className="qs-box-items-image" alt='Server issue'/>
                                </div>
                                <div className=" Details col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <h4 className="qs-box-header">Frontend</h4>
                                    <br />
                                    <p className="qs-box-desc">Frontend application service which you will get.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="qs-box col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 " onClick={() => navigate('/Backendsample')}>
                        <div className="qs-box-items">
                            <div className="image row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"  >
                                    <img src={Backsec} className="qs-box-items-image" alt='Server issue'/>
                                </div>
                                <div className="Details col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <h4 className="qs-box-header">Frontend &amp; Backend</h4>
                                    <br />
                                    <p className="qs-box-desc" >Frontend &amp; Backend application service , which you will get</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="qs-box col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 " onClick={() => navigate('/Commercial_Service')}>
                        <div className="qs-box-items">
                            <div className="image row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <img src={BackgroundSecond} className="qs-box-items-image"  alt='Server issue'/>
                                </div>
                                <div className="Details col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <h4 className="qs-box-header">Commercial</h4>
                                    <br />
                                    <p className="qs-box-desc" id="aboutservices">Accounting &amp; Taxation <br/>&amp; Finencial Business Intelligency(Analytics) Services , which you <br/>will get.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div className="container no-padding">
                <br/>
                <h1 className="bottom-header">Unlock Internship</h1>
                <h3 className="bottom-subheader">Unlock your potential and shape your future with the perfect Internship</h3>
                <br />
                <br/>
                <div className="row">
                  
                    <div className="qs-box col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 " onClick={() => navigate('/Course/Excel')}>
                        <div className="qs-box-items" >
                            <div className="image row"  >
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <img src={ExcelImg} className="qs-box-items-image" alt='Server issue' />
                                </div>
                                <div className=" Details col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <h4 className="qs-box-header">Excel</h4>
                                    <br />
                                    <p className="qs-box-desc" >"Take your Excel skills <br/>to the next level with <br/>our expert-led course".</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="qs-box col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 " onClick={() => navigate('/Course/Python')}>
                        <div className="qs-box-items">
                            <div className="image row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6"  >
                                    <img src={PythonImg} className="qs-box-items-image"  alt='Server issue' />
                                </div>
                                <div className="Details col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <h4 className="qs-box-header">Python</h4>
                                    <br />
                                    <p className="qs-box-desc">"     every hour spent learning Python is an investment in yourself <br/> and your future"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="qs-box col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 " onClick={() => navigate('/Course/SQL')}>
                        <div className="qs-box-items">
                            <div className="image row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <img src={PS} className="qs-box-items-image"  alt='Server issue '/>
                                </div>
                                <div className="Details col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <h4 className="qs-box-header">Excel &amp; Python &amp; SQL</h4>
                                    <br />
                                    <p className="qs-box-desc">This is a Great <br/> Exposure learning combination of <br/> Excel &amp; Pyhton &amp; SQL </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <br />
          

            <div className="container-fluid "     id="godcontact" >
           
                <div className="headingSection">
                    <br />
                    <div className='expert'>TALK TO AN EXPERT</div>

                </div>

                <div className="formSection">
                    <br />
                    <br />

                    <form >


                        <input type="email" placeholder=" Email*" className="PlaceSection_Part" value={User.email} onChange={(e) => handleChange(e, 'email')} required />
                        <br />
                        {/* /* maxlength="10"
                        maxlength="200"  */}
                        <input type="number" placeholder="Enter 10 digit Mobile-No*" className="PlaceSection_Part" value={User.phoneNo} onChange={(e) => handleChange(e, 'phoneNo')}  maxLength={10} required />
                        <br />

                        <input type="date" placeholder=' Date*' className="PlaceSection_Part" value={User.Name} onChange={(e) => handleChange(e, 'Name')} required />
                        <br />
                        {/* <!-- <input type="text" placeholder="Enter Comment" maxlength="200" class="PlaceSections" required> --> */}
                        <textarea placeholder=" How can we help you?*" className="PlaceSections" value={User.text} onChange={(e) => handleChange(e, 'text')} required>

                        </textarea>

                        <br />
                        <input type="button" id='dataSubmit' className='btn btn-dark  mb-1' style={{ width: '120px', marginLeft: '200px' }} onClick={UserqueryHandlers} value="Send" />
                        {/* <button class="btn btn-outline-success submitButton" type="submit"  onClick={signUphandler}>Submit</button> */}
                        <button onClick={() => window.location.reload(false)} className='reload' >Click</button>
                    </form>

                    <h4>*Mandatory fields</h4>

                </div>
            </div>

            <div className="container-fluid footer">

                <div className="ancortags" onClick={() => navigate('/')}><img src={AnjanaLogo} className='LogoStyle' /></div>

                <div className="facebook" >
                    <a href="https://www.facebook.com/profile.php?id=100065105851135" target="_blanks"
                        style={{ fontSize: '15px', textDecoration: 'none' }}>
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com/?lang=en-in" target="_blanks"
                        style={{ fontSize: '15px', marginLeft: '30px', textDecoration: 'none' }}>
                        <i className="bi bi-twitter text-info"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/brajesh-chotia-10551621a/" target="_blank"
                        style={{ fontSize: '15px', marginLeft: '30px', textDecoration: 'none' }}>
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank"
                        style={{ fontSize: '15px', marginLeft: '30px', textDecoration: 'none' }}>
                        <i className="bi bi-instagram" style={{ color: 'rgb(148, 28, 28)' }}></i>
                    </a>
                    <a href="https://www.youtube.com/@uditsharma2038" target="_blank"
                        style={{ fontSize: '15px', marginLeft: '30px', textDecoration: 'none' }}>
                        <i className="bi bi-youtube" style={{ color: 'red' }}></i>
                    </a>


                </div>

                <div >
                    <h6 className='Time'> Time: {formatTime(time)}</h6>
                    <div className='CompanyName'>©2024 Anjana Institute.club</div>
                </div>


            </div>



            {/* <div className="container-fluid ">

                 <footer className="text-center text-white" style={{ backgroundColor: 'black' }}>

                    <div className="container p-4">

                        <section >
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6">
                                    <div className="ratio ratio-16x9">
                                        <iframe src="https://www.youtube.com/embed/m8dkOagHk-U?si=hFMDhhUFAO3zD7FF" title="YouTube video player" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>



                    <div className="container-fluid footer">
                        <div className="facebook" >
                            <a href="https://www.facebook.com/profile.php?id=100065105851135" target="_blanks"
                                style={{ fontSize: '30px', textDecoration: 'none' }}>
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com/?lang=en-in" target="_blanks"
                                style={{ fontSize: '30px', marginLeft: '30px', textDecoration: 'none' }}>
                                <i className="bi bi-twitter text-info"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/brajesh-chotia-10551621a/" target="_blank"
                                style={{ fontSize: '30px', marginLeft: '30px', textDecoration: 'none' }}>
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank"
                                style={{ fontSize: '30px', marginLeft: '30px', textDecoration: 'none' }}>
                                <i className="bi bi-instagram" style={{ color: 'rgb(148, 28, 28)' }}></i>
                            </a>
                        </div>
                    </div>

                </footer> 
        
            </div>  */}

        </div>
    )
}

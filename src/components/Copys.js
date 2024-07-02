import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import img1 from '../Assets/img1.png'

import img2 from '../Assets/img2.png'
import '../Styles/Copy.css';



const constants = require('../constants')
const API_URL = constants.API_URL;

export default function Copys(props) {

  const handleClick = useNavigate();
  const locationclick = useLocation();
  const navigate = () => {
    if (locationclick.pathname == '/Frontendsample') {
      handleClick('/Frontendsample/Form')
    } else if (locationclick.pathname == '/Backendsample') {
      handleClick('/Backendsample/Form')
    }
    else if (locationclick.pathname == '/Commercial_Service') {
      handleClick('/Commercial_Service/Form')
    }
  }








  const getchecksum = (data) => {
    return fetch(`${API_URL}/payment`, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content_Type": 'application/json'
      },
      body: JSON.stringify(data)
    }).then(result => {
      return result.json()
    }).catch(error => {
      console.log(error)
    })
  }




  const paymentHandler = () => {
    //user data should be dynamic
    const data = {
      amount: 999,
      email: 'brijesh.sharma0709@gmail.com',
      mobileNo: 8000489615
    }

    getchecksum(data).then(result => {
      const information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: result
      }
      posttheinformation(information)  //post the user information
    }).catch(error => {
      console.log(error)
    })
  }


  const isObj = (val) => {
    return typeof val === 'object'
  }

  const isDate = (val) => {
    return Object.prototype.toString.call(val) === '[object Date]'
  }
  const stringifyValue = (value) => {
    if (isObj(value) && !isDate(value)) {
      return JSON.stringify(value);
    } else {
      return value;
    }
  }

  const buildForm = (details) => {
    const { action, params } = details;
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', action);

    Object.keys(params).forEach(key => {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', key);
      input.setAttribute('value', stringifyValue(params[key]));
      form.appendChild(input)

    });
    return form;
  }

  const posttheinformation = (information) => {

    const form = buildForm(information);
    document.body.appendChild(form);
    form.submit()

    form.remove()


  }



  return (
    <div className='container' >
      <div className='images'>
        <Carousel className=' carousel-slider' showThumbs={false} autoPlay={true} infiniteLoop >
      
          <div>
            <img src={img1} alt='image not found' />
            {/* <video className='videoplaystyle' loop muted autoPlay>
              <source src="https://addons-media.operacdn.com/media/themes/10/281910/1.0-rev1/animations/video_preview.webm" type="video/webm" />
            </video> */}

          </div>
          <div>
            <img src={img2} alt='image not found' />

          </div>
          <div>
            <img src={img1} alt='image not found' />

          </div>
        </Carousel>

      </div>

      <div className='headingLine my-3'>{props.text}
        {/* Front-end Application Details: */}
        {/* <button className='btn btn-success float-end  mt-3' onClick={paymentHandler} >Give online order</button> */}
        <button className='btn btn-success float-end mt-3' onClick={() => navigate()} >Give Online Order</button>

      </div>




      <div className='mytabs mb-5'>
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Help &amp; Support</Tab>

          </TabList>

          <TabPanel>
            <br />
            <div className='about my-2'>About this application</div>
            <div className='average mt-3'>Average Cost</div>
            <div className='averages '>&#8377;{props.amount} for Front-end Application</div>



          </TabPanel>
          <TabPanel>
            <div className='average'>Phone Number
              {/* <div className='averages'>+91-9079642315</div> */}
              <div className='averages'>N/A</div>
            </div>
            <br />
            <div className='average mt-3'> Email:
              <div className='averages'>N/A (will be updated)</div>
            </div>
          </TabPanel>


        </Tabs>
      </div>

    </div>
  )
}

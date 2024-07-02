
import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const constants = require('../constants')
const API_URL = constants.API_URL;



export default function Payments() {




    const paymentHandler = async (data) => {
        try {
            let response = await axios.post(`${API_URL}/payment`, data)
            return response.data;
        }
        catch (error) {
            console.log('Error while calling payment')
        }
    }


    const isDate = (val) => {
        return Object.prototype.toString.call(val) === '[object Date]'
      }

    const isObj = (val) => {
        return typeof val === 'object'
      }
    
     
      const stringifyValue = (value) => {
        if (isObj(value) && !isDate(value)) {
          return JSON.stringify(value);
        } else {
          return value;
        }
      }
    

      const buildForm = ({ action, params }) => {
        
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
    
      const post = (details) => {
    
        let  form = buildForm(details);
        document.body.appendChild(form);
        form.submit()
    
        form.remove()
    
    
      }


    const BuyNow =   () => {
        let response =  paymentHandler({ amount: 1, email: 'brijesh.sharma0709@gmail.com', mobileNo: 8000489615})
        let information =  {
            // action: 'https://securegw-stage.paytm.in/theia/processTransaction',
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }

        post(information);
    }




    


    const [value, setValue] = useState(0);

    // Function to increase the value
    const increaseValue = () => {
      // Use the setValue function to update the value
      setValue(value + 1);
    };

    return (
        <div>
            Payment Successfully
            <button className='btn btn-success float-end  mt-3' onClick={() => BuyNow()} >Buy Now</button>



            <div>
                <button onClick={increaseValue}>+increase</button>
                <h1>{value}</h1>
                {/* <button onClickFunc={decrementCounter}>-decrease</button> */}
            </div>
        </div>



    )
}





import React, { useState } from 'react';
import '../Styles/Form.css';

import axios from 'axios';
const constants = require('../constants')
const API_URL = constants.API_URL;

export default function Form(props) {



  const [value, setValue] = React.useState(1);
  const [amount, setAmmount] = React.useState(Number(props.val));




  // Function to increase the value
  const increaseValue = () => {
    // Use the setValue function to update the value

    setValue(value + 1);
    setAmmount(amount + Number(props.val))

  };

  const decreaseValue = () => {
    if (value >= 2) {
      setValue(value - 1);
      setAmmount(amount - Number(props.val));
    }

  }


  const [email, setEmail] = useState('');
  const [ReferenceId, setReferenceId] = useState('');
  const [Amount, setAmount] = useState('');
  const [profileImage, setFile] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReferenceIdChange = (e) => {
    setReferenceId(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };


  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('ReferenceId', ReferenceId);
    formData.append('Amount', Amount)
    formData.append('profileImage', profileImage);

    try {
      const response = await axios.post(`${API_URL}/upload`, formData);
      console.log(response.data);
      alert("Payment process is in pending mode" + "\n" + " Note:  After successful payment, You will get the payment reciept on your Login Id(Email)")
    } catch (error) {
      console.error('Error uploading data:', error);
      alert(error)
    }
  };


  return (

    <div className='container-fluid' id="FormApplication">

      <br />


      <div className='Payment' >Payment Form</div>

      <br />
      <div className='paymentSection'>
        <div className='PaymentDetails'> Paytm

         <hr className='linestyle' />
          <div className='PaymentNameFirst'>Name:
            <span className='Value'>  Brajesh </span>
          </div>
          <div className='PaymentNameSecond'>Paytm:
            <span className='Value'>8000489615 </span>
          </div>
        </div>
      </div>

      <div className='PlaceSection' >


        <div className='addbuttonstyle'>
          <button className="increasebuttonstyle" onClick={increaseValue}> + </button>
          <input className='valueStyles' type='text' value={value} />
          <button className='decreasebuttonstyle' onClick={decreaseValue}> -  </button>

        </div>
        <div className="AmountSection">Amount: {amount}</div>
      </div>

      <br />

      <form>
        <div className='User-Pay' id="First">User Confirmation<span className="data">*</span></div>
        <input type="email" placeholder="Enter Your Email" className="PlaceSection" value={email} onChange={handleEmailChange} required />

        <br />

        <div className='User-Pay' id="Second" >Unique Transaction Reference<span className="data">*</span></div>
        <input type="number" placeholder="12 digit UTR Number" className="PlaceSection" value={ReferenceId} onChange={handleReferenceIdChange} required />
        <br />
        {/* */}

        <div className='User-Pay' id="Third" >Amount<span className="data">*</span></div>
        <input type="number" value={Amount} className="PlaceSection" onChange={handleAmountChange} required />

        <div className='User-Pay' id="Four">Upload Your Payment Proof <span className="data">[Required]</span></div>
        <input type="file" name='profileImage' className="PlaceSection " id="fileName" onChange={handleFileChange} required />
        <br />
        <div className='submit'>
          <input type="button" className='btn btn-success form-control mb-1' id="buttonSubmit" value="Submit" onClick={handleUpload} />
        </div>

        {/* onClick={UserqueryHandlers}  */}
        <br/>
        <div className='PlaceSection'>
          
        </div>
      </form>

    </div>
  )
}






import React from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';

const constants = require('../constants')
const API_URL = constants.API_URL;


export default function ResetPassword() {
  const {id, token} = useParams();
  const [User, setUser] = React.useState({

    password: "",
    password_confirmation: "",
    message: "Pasword Updated !"
   
    

  })

 
  


  


  const ResetPassworddone =( )=>{

    
    const obj = {
     
      password: User.password,
      password_confirmation: User.password_confirmation,
      messages: User.message
    };
    
   
  
    axios({
      method: 'POST',
      // url: `${API_URL}/ResetPassword/${id}/${token}`,
       url: `${API_URL}/ResetPassword/${id}/${token}`,
      // url: 'http://localhost:4000/login',
      header: { 'Content-Type': 'application/json' },
      data: obj
    }).then(response => {
      localStorage.setItem("user", JSON.stringify(response.data.user.password));
      setUser({
        user: response.data.user.password,
        user: response.data.user.message
      })
    

    }).catch(error => {

      alert("Password reset successfully !")
      // setErrMsg("User name and password is wrong")
      setUser({
        ...User,
        

      })
    })
  }

   const handleChange = (e, field) => {
    const val = e.target.value;
    setUser({
      ...User,
      [field]: val,

      
    })

   
  }


  return (
    
    <div className='container'>
        
        {/* <h3>token: {token}</h3> */}
        <br/>
        <form >
        <input className='form-control mb-1' type='password' style={{ width : '400px'  }} value={User.password} placeholder='Passwrod' onChange={(e) => handleChange(e, 'password')} />
        

        <input className='form-control mb-1' type='password'  style={{ width : '400px', marginTop:'10px'  }} value={User.password_confirmation} placeholder='Passwrod_confirmation' onChange={(e) => handleChange(e, 'password_confirmation')} />
        
        <input type="button" className='btn btn-success form-control mb-1' style={{ width : '100px' ,marginTop:'8px', marginLeft:'300px' }} onClick={ResetPassworddone} value="Reset" />
        </form>
    </div>
  )
}

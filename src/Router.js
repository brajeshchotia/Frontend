import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { Component } from 'react';

import Header from './components/Header';
import MiddlePart from './components/MiddlePart'
import Copys from './components/Copys';
import ResetPassword from './components/ResetPassword';
import Payments from './components/Payments';
import Course from './components/Course'
import ExcelSyllebus from './components/ExcelSyllebus';
import PythonSyllebus from './components/PythonSyllebus';
import MixupSyllebus from './components/MixupSyllebus';
import WhatWeDO from './components/WhatWeDO';
import WhoWeAre from './components/WhoWeAre';
import Commercial from './components/Commercial';
// import Payment from './components/Payment';
import Form from './components/Form';
import ScrollToTop from './ScrollToTop';

class Router extends Component {



    render() {



        return (
            <BrowserRouter>
                <ScrollToTop />
                <Header />

                <Routes>
                
                    <Route exact path='/' element={<MiddlePart />} />
                    <Route path='/Frontendsample' element={<Copys text="Front-end Application Details" amount="6999" />} />

                    <Route path='/Backendsample' element={<Copys text="FE & BE Appication Details" amount="19999" />} />
                    <Route path='/Commercial_Service'  element = {<Copys text = "No any service" amount = "NA"/>}/>
                    <Route path='/ResetPassword/:id/:token' element={<ResetPassword />} />
                    {/* <Route excat path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/filter' element={<Filter />} />
                    <Route path='/details' element={<Details />} />
                    <Route path = '/copy' element = {<Copy />} />
                    <Route path = '/ResetPassword/:id/:token'  element = {<ResetPassword/>}/> */}
                    <Route path='/Payments' element={<Payments />} />
                    <Route path='/Frontendsample/Form' element={<Form val="6999" />} />
                    <Route path='/Backendsample/Form' element={<Form val="19999" />} />
                    <Route path='/Commercial_Service/Form' element={<Form val="N/A" />} />
                    <Route path='/Course/Excel' element={<Course Tool="Excel" />} />
                    <Route path='/Course/Python' element={<Course Tool="Python" />} />
                    <Route path='/Course/SQL' element={<Course Tool="Python || SQL || Excel" />} />
                    <Route path='/Course/Excel/ExcelSyllebus' element={<ExcelSyllebus />} />
                    <Route path='/Course/Python/PythonSyllebus' element={<PythonSyllebus />} />
                    <Route path='/Course/SQL/SQLSyllebus' element={<MixupSyllebus />} />
                    <Route path='/What WE DO' element={<WhatWeDO />} />
                    <Route path='/Who WE Are' element={<WhoWeAre />} />
                  
                </Routes>


            </BrowserRouter>
        )
    }
}

export default Router;

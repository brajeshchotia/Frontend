import React, { useState, useEffect } from 'react';
import '../Styles/Course.css'
import { useNavigate, useLocation } from 'react-router-dom';

import Moveimgfirst from '../Assets/Moveimgfirst.jpg'

import Moveimgsecond from '../Assets/Moveimgsecond.jpg'

const carouselData = [
    { imageUrl: Moveimgfirst, text: 'Build a future you believe in', buttonText: 'apply now ->' },
    { imageUrl: Moveimgsecond, text: 'UBSERVE Launchpad is now LIve', buttonText: 'Register Now' },

    // Add more image-text-button pairs as needed
];

export default function Course(props) {

    const handleClicks = useNavigate();
    const locationclicks = useLocation();
    const SyllebusFunction = () => {
        if (locationclicks.pathname == '/Course/Excel') {
            handleClicks('/Course/Excel/ExcelSyllebus')
        } else if (locationclicks.pathname == '/Course/Python') {
            handleClicks('/Course/Python/PythonSyllebus')
        }
        else if (locationclicks.pathname == '/Course/SQL') {
            handleClicks('/Course/SQL/SQLSyllebus')
        }
    }



    const carouselData = [
        { imageUrl: Moveimgfirst, text: 'Accelerate your career with UBSERVE Coaching', buttonText: 'apply now' },
        { imageUrl: Moveimgsecond, text: 'UBSERVE Launchpad is now Live/Online', buttonText: 'See More' },

        // Add more image-text-button pairs as needed
    ];
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Set loaded to true once the component is mounted
        setLoaded(true);
    }, []);



    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
                setCurrentText('');
            }
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, [isPaused]);

    useEffect(() => {
        if (!isPaused) {
            const textTimer = setTimeout(() => {
                setCurrentText(carouselData[currentIndex].text);
            }, 3000); // Show text after 1 second

            return () => clearTimeout(textTimer);
        }
    }, [currentIndex, isPaused]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
        setCurrentText('');
    };

    const handlePause = () => {
        setIsPaused((prevPaused) => !prevPaused);
    };

    // images = carouselData[currentIndex].map(({ imageUrl }) => imageUrl)
    // console.log(images) 
    return (
        // carousel
        <div className="app">
            <div className='CoursePart'>
                <div className={`carousel ${loaded ? 'loaded' : ''}`} >
                    <img className='imgstyle' src={carouselData[currentIndex].imageUrl} alt="Carousel" />


                </div>
                <div className="text-container">
                    <div className="text">{currentText}</div>
                    {currentText && <button className="applyNow" onClick={() => SyllebusFunction()}>{carouselData[currentIndex].buttonText}</button>}
                </div>
            </div>

            <div className="controls">
                {/* <span> {currentIndex+1} -  2</span>  */}
                {isPaused ?
                    <>
                        <i className='bi bi-play' onClick={handlePause}   > </i>
                    </>
                    :
                    <>
                        <i className='bi bi-pause' onClick={handlePause}> </i>
                    </>
                }
                {/* <i className='bi bi-pause' onClick={handlePause}>{isPaused ? 'Play' : 'Pause'}</i> */}
                <i className='bi-arrow-right' onClick={handleNext}></i>
            </div>


            <div id='CourseDetailSection'>

                <table className="table" >
                    <thead>
                        <tr>
                            <th id='table' scope="col">ToolName || {props.Tool}</th>

                            <th id='table' scope="col">Batch-Date || 01/03/2024</th>
                            <th id='table' scope="col">Duration || 45Days </th>

                        </tr>
                    </thead>
                    {/* <tbody>
                        <tr>
                            <th  id='table' scope="row">Excel</th>
                            <td   id='table'>2000Rs</td>
                            <td   id='table'> 1/3/2024</td>
                            <td  id='table'> 3 Month</td>
                        </tr>
                      
                    </tbody> */}
                </table>


            </div>

        </div>



    )
}

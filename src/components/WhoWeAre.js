import React, { useState, useEffect } from 'react'
// import maxresdefault from '../Assets/maxresdefault.jpg'
import hqdefaultone from '../Assets/hqdefaulone.jpeg'


import '../Styles/What.css'
import websitevideo from '../Assets/websitevideo.mp4'
import FounderImage from '../Assets/FounderImage.jpeg'
import COFounderImage from '../Assets/COFounderImage.png'

export default function WhoWeAre() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Set loaded to true once the component is mounted
        setLoaded(true);
    }, []);

    return (
        <div className='whatstyle'>
            <div className={`whatsession  ${loaded ? 'loaded' : ''}`}>
                <img className='imgstyles' src={hqdefaultone} alt='Server issue ' />

            </div>
            {/* 
            <div className='lordshiva'>
                <img src={R} alt='Server issue' />
            </div> */}
            {/* <div className='whatsessionexplan' >
                <div className='WhatPart'>WHAT WE DO</div>
                
        

                
            </div>
            <hr/>
            <div className='whatdopart'>Transforming businesses through technology.</div> */}
            <div className='whatsessionexplan'>
                <div className='whating'>
                    WHO WE ARE
                    <hr />
                    <h1 id='whatpart'>Building on belief</h1>
                </div>

            </div>

            <br />
            <br />
            <br />
            <div className='container'>
                <h2>AI's Commitments</h2>
            </div>


            <div className='container' >
                <br />

                <div className="row">

                    <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 " >
                        <div className='FounderBoxStyle'>
                            <div className='row'  >
                                <div className="text-contect col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <h6 className='FoundersName' >Mrs. Anju Sharma</h6>

                                    <p className='FounderArticle'>Everyone in this world should get practical learning or lead-up, whether person is rich or not? </p>
                                </div>
                                <div className="FounderImage col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <img className='Founder' src={FounderImage} alt='Server issue' />
                                    <div className='Foundertitle'>Founder</div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" >
                        <div className="FounderBoxStyle">
                            <div className="row">
                                <div className="text-contect col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <h6 className='FoundersName'>Pt. Rajendra Sharma</h6>

                                    <p className='FounderArticle'>To provide the best and most value adding services at minimal cost within our advisory areas.</p>
                                </div>
                                <div className="FounderImage col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6" >
                                    <img className='Founder' src={COFounderImage} alt='Server issue' />
                                    <div className='Foundertitle'>CO.Founder</div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-fluid'>
                <div className='row' id="WhatSections">
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12' id='left_part'>
                        {/* <h4 className='explaningpartfirsts'>Building greater futures through innovation and collective knowledge</h4> */}
                        <div className='explaningpartfirsts'>We take a long-term view, building relationships that endure, leading to mutual growth and sustainable outcomes.</div>

                    </div>

                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12' id='right_part'>

                        {/* <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/m8dkOagHk-U?si=hFMDhhUFAO3zD7FF" title="YouTube video player" allowfullscreen></iframe>
                        </div> */}
                        <div >
                            {/* <img className='imgageheightlight'  src= {image} /> */}
                            {/* <video className='imgageheightlight' loop muted autoPlay>
                                <source src="https://addons-media.operacdn.com/media/themes/85/260085/1.0-rev1/animations/video_preview.webm" type="video/webm" />
                            </video> */}
                            <video className='imgageheightlight' loop muted autoPlay>
                                <source src="https://addons-media.operacdn.com/media/themes/82/276482/1.0-rev1/animations/video_preview.webm" type="video/webm" />
                            </video>
                          
                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

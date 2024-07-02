import React, { useState, useEffect } from 'react'
import hqdefaultone from '../Assets/hqdefaulone.jpeg'

import '../Styles/What.css'
import websitevideo from '../Assets/websitevideo.mp4'


export default function WhatWeDO() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Set loaded to true once the component is mounted
        setLoaded(true);
    }, []);

    return (
        <div className='whatstyle'>
            <div className={`whatsession  ${loaded ? 'loaded' : ''}`}>
                {/* <img className='imgstyles' src={hqdefaultone} /> */}
                <video className='videostyle' loop muted autoPlay>
                    <source  src="https://addons-media.operacdn.com/media/themes/85/260085/1.0-rev1/animations/video_preview.webm" type="video/webm" />
                </video>
            </div>
            {/* <div className='whatsessionexplan' >
                <div className='WhatPart'>WHAT WE DO</div>
                
        

                
            </div>
            <hr/>
            <div className='whatdopart'>Transforming businesses through technology.</div> */}
            <div className='whatsessionexplan'>
                <div className='whating'>
                    WHAT WE DO
                    <hr />
                    <h4 id='whatpart'>Transforming Bsinesses Through Technology.</h4>
                </div>

            </div>

            <div className='container-fluid'>
                <div className='row' id="WhatSection">
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12' id='left_part'>
                        <div className='explaningpartfirst'>Belief Powers Business</div>
                    </div>

                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12' id='right_part'>

                        {/* <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/m8dkOagHk-U?si=hFMDhhUFAO3zD7FF" title="YouTube video player" allowfullscreen></iframe>
                        </div> */}
                        <div >
                            {/* <img className='imgageheightlight' src={partner} /> */}
                            <video className='imgageheightlight' controls loop muted autoPlay>
                                <source src={websitevideo} type="video/mp4" />
                            </video>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

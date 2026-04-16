'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { PersonalDodecahedron } from '../components/dodechedron/newBackground';
import SideLabel2 from '../components/sideLabel2/SideLabel2';


const page = () => {

    const section1Ref = useRef(null);

    return (
        <div className='grid_2_all'>
            <PersonalDodecahedron />
            <div ref={section1Ref} id='home_1_section' className='grid_2_up'>
                <h1>
                    Designing a <br />
                    Better <span>World Today</span>
                </h1>

                <div onClick={() => { document.getElementById('grid_1_mid').scrollIntoView({ behavior: 'smooth' }) }}>
                    <p>OUR WORKS</p>
                    <FaCircleArrowDown className='grid_2_up_icon' />
                </div>
            </div>

            <SideLabel2 section1Ref={section1Ref} />

            <div id='grid_1_mid' className='grid_1_mid'>
                <div className='grid_1_mid_1'>
                    <div className="grid_1_mid_item">
                        <img width={'100%'} height={'350px'} src='assets/grid_1_1.jpg' alt='grid 1 image'></img>
                        <div className='grid_1_item_desc'>
                            <span>BRANDING</span>
                            <p>MAY 24 2023</p>
                        </div>
                        <h2>Interior design studio</h2>
                    </div>

                    <div className="grid_1_mid_item" style={{ marginTop: '50px' }}>
                        <img width={'100%'} height={'300px'} src='assets/grid_1_4.jpg' alt='grid 1 image'></img>
                        <div className='grid_1_item_desc'>
                            <span>DESIGN</span>
                            <p>MAY 24 2023</p>
                        </div>
                        <h2>Kemia Honest Skincare</h2>
                    </div>
                </div>

                <div className="grid_1_mid_item">
                    <img width={'100%'} height={'680px'} src='assets/grid_1_2.jpg' alt='grid 1 image'></img>
                    <div className='grid_1_item_desc'>
                        <span>DESIGN</span>
                        <p>MAY 24 2023</p>
                    </div>
                    <h2>Air Pro by Molekule</h2>
                </div>


                <div className='grid_1_mid_2'>
                    <div className="grid_1_mid_item">
                        <img width={'500px'} height={'300px'} src='assets/grid_1_5.jpg' alt='grid 1 image' style={{ marginTop: '50px' }}></img>
                        <div className='grid_1_item_desc'>
                            <span>DESIGN</span>
                            <p>MAY 24 2023</p>
                        </div>
                        <h2>Home Security Camera</h2>
                    </div>

                    <div className="grid_1_mid_item">
                        <img width={'100%'} height={'350px'} src='assets/grid_1_3.jpg' alt='grid 1 image'></img>
                        <div className='grid_1_item_desc'>
                            <span>PHOTOGRAPHY</span>
                            <p>MAY 24 2023</p>
                        </div>
                        <h2>Cascade of Lava</h2>
                    </div>

                </div>

                <div className="grid_1_mid_item">
                    <img width={'100%'} height={'680px'} src='assets/grid_1_6.jpg' alt='grid 1 image'></img>
                    <div className='grid_1_item_desc'>
                        <span>DESIGN</span>
                        <p>MAY 24 2023</p>
                    </div>
                    <h2>Tony's chocolonely</h2>
                </div>

            </div>

            <div className='grid_1_down'>
                <div className='grid_1_down_position'>
                    <p>Looking to make your mark? We'll help you turn yourr project into a success sotry.</p>
                    <span></span>
                </div>

                <h2>
                    Ready to bring your <span>ideas</span> to life?<br />
                    We're <span>here to help</span>
                </h2>

                <Link href={'/contact'} className='grid_1_down_link'>
                    <p>CONTACT US</p>
                    <FaCircleArrowRight className='grid_1_down_icon' />
                </Link>
            </div>
        </div>
    )
}

export default page

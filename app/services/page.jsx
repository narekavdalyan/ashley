'use client'

import React, { useRef } from 'react'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { PersonalDodecahedron } from '../components/dodechedron/newBackground';
import Link from 'next/link';
import SideLabel2 from '../components/sideLabel2/SideLabel2';


const page = () => {
    const section1Ref = useRef(null);

    return (
        <main className='services_all'>
            <PersonalDodecahedron />
            <div ref={section1Ref} id='home_1_section' className='services_up'>
                <h1>This is <span>what</span> <br /> we do <span>best</span></h1>
                <button onClick={() => {
                    document.getElementById('services_center').scrollIntoView({ behavior: 'smooth' });
                }}>
                    <p>OUR SERVICES</p>
                    <FaCircleArrowDown className='services_up_icon' />
                </button>
            </div>

            <SideLabel2 section1Ref={section1Ref} />

            <div id='services_center' className='services_centre'>

                <div className="wrapper">
                    <div className="grid"></div>

                    <div className="shape top"></div>
                    <div className="shape middle"></div>
                    <div className="shape bottom"></div>
                </div>

                <div className='services_center_right'>
                    <div className='service_right_up'>
                        <div className='services_right_item'>
                            <h2>Branding and <br /> Identify Design</h2>
                            <h4>
                                Our creative agency specializes in creating unique brand
                                identities that resonate with your target audience.
                            </h4>

                            <ul type='none'>
                                <li>UX AUDITS</li>
                                <li>DESIGN THINKING</li>
                                <li>METHODOLOGIES</li>
                                <li>WIREFRAMING</li>
                            </ul>

                            <Link href={'/services/single'} className='services_right_btn'>
                                <p>READ MORE</p>
                                <FaCircleArrowRight className='services_btn_icon' />
                            </Link>
                        </div>

                        <div className='services_right_item'>
                            <h2>Website Design <br /> and Development</h2>
                            <h4>
                                Our creative agency specializes in creating unique brand
                                identities that resonate with your target audience.
                            </h4>

                            <ul type='none'>
                                <li>UX AUDITS</li>
                                <li>DESIGN THINKING</li>
                                <li>METHODOLOGIES</li>
                                <li>WIREFRAMING</li>
                            </ul>

                            <Link href={'/services/single'} className='services_right_btn'>
                                <p>READ MORE</p>
                                <FaCircleArrowRight className='services_btn_icon' />
                            </Link>
                        </div>
                    </div>


                    <div className='service_right_down'>
                        <div className='services_right_item'>
                            <h2>Advertising and <br /> Marketing Compaigns</h2>
                            <h4>
                                Our creative agency specializes in creating unique brand
                                identities that resonate with your target audience.
                            </h4>

                            <ul type='none'>
                                <li>UX AUDITS</li>
                                <li>DESIGN THINKING</li>
                                <li>METHODOLOGIES</li>
                                <li>WIREFRAMING</li>
                            </ul>

                            <Link href={'/services/single'} className='services_right_btn'>
                                <p>READ MORE</p>
                                <FaCircleArrowRight className='services_btn_icon' />
                            </Link>
                        </div>

                        <div className='services_right_item'>
                            <h2>Creative Consulting <br /> Concept Development</h2>
                            <h4>
                                Our creative agency specializes in creating unique brand
                                identities that resonate with your target audience.
                            </h4>

                            <ul type='none'>
                                <li>UX AUDITS</li>
                                <li>DESIGN THINKING</li>
                                <li>METHODOLOGIES</li>
                                <li>WIREFRAMING</li>
                            </ul>

                            <Link href={'/services/single'} className='services_right_btn'>
                                <p>READ MORE</p>
                                <FaCircleArrowRight className='services_btn_icon' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='services_down'>
                <div className='service_down_position'>
                    <p>Looking to make your mark? We'll help you turn yourr project into a success sotry.</p>
                    <span></span>
                </div>

                <h2>
                    Let's make an <span>impact</span> <br />
                    together. Ready <span>when you are</span>
                </h2>

                <Link href={'/contact'} className='services_down_btn'>
                    <p>CONTACT US</p>
                    <FaCircleArrowRight className='services_down_btn_icon' />
                </Link>
            </div>

        </main>
    )
}

export default page

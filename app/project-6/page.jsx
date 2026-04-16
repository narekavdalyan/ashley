'use client'

import React from 'react'
import ContactBox from '../components/contact_block/ContactBox'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import { PersonalDodecahedron } from '../components/dodechedron/newBackground';
import DragSlider from '../components/dragSlider/DragSlider';

const page = () => {
    return (
        <div className='project_6_all'>
            <PersonalDodecahedron />

            <div className="project_3_up">
                <h1>Kemia Honest <span>Skincare</span></h1>
                <button onClick={() => {
                    document.getElementById('project_6_mid').scrollIntoView({ behavior: 'smooth' })
                }}>
                    <p>READ MORE</p>
                    <FaCircleArrowDown className='project_3_up_icon' />
                </button>
            </div>

            <div className='project_5_up_2'>
                <img src="assets/grid_1_6.jpg" alt="Project 5 Image" width={'100%'} />
                <div>
                    <p><span>CLIENT:</span> ENVATO MARKET</p>
                    <p><span>DATE:</span> APRIL 2026</p>
                    <p><span>AUTHOR:</span> PAUL TRUEMAN</p>
                </div>
            </div>

            <DragSlider />

            <div id='project_6_mid' className='project_6_mid'>


                <div className='project_1_mid_2_text'>
                    <div>
                        <h2>Simplicity, elegance, innovation!</h2>
                    </div>

                    <div>
                        <p>
                            A home surveillance camera that pays great attention to security and user privacy, featuring two modes to provide
                            security while protecting personal privacy.The camera has an open and closed mode, we define the product to have
                            clear two sides, expressing two working states and emotions.
                        </p>

                        <p>
                            Presents a simple and quiet state when not in use, delivering a gentle and security.At the same time,the camera
                            can adapt to a variety of environments, providing elegant ways of wall hanging and standing installation.
                        </p>
                    </div>
                </div>

                <DragSlider />


                <div className='project_mid_down'>
                    <Link className='project_flex_link' href={'/project-5'}>
                        <FaCircleArrowLeft className='project_link_icon' />
                        <p>PREV PROJECT</p>
                    </Link>

                    <Link href={'grid-1'}>
                        <p>ALL PROJECTS</p>
                    </Link>

                    <Link className='project_flex_link' href={''}>
                        <p>NEXT PROJECT</p>
                        <FaCircleArrowRight className='project_link_icon' />
                    </Link>
                </div>
            </div>

            <ContactBox />
        </div>
    )
}

export default page

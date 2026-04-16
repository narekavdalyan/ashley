'use client'

import React from 'react'
import ContactBox from '../components/contact_block/ContactBox'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import { PersonalDodecahedron } from '../components/dodechedron/newBackground';


const page = () => {
  return (
    <div className='project_1_all'>

      <PersonalDodecahedron />
      
      <div className="project_1_up">
        <h1>Interior Design <span>Studio</span></h1>
        <button onClick={() => {
          document.getElementById('project_1_mid').scrollIntoView({behavior: 'smooth'})
        }}>
          <p>READ MORE</p>
          <FaCircleArrowDown className='project_1_up_icon' />
        </button>
      </div>

      <div id='project_1_mid' className='project_1_mid'>
        <div className="project_1_mid_1">
          <img src="assets/grid_1_1.jpg" alt="Prokect 1 image" width={'100%'} height={'100%'} />
          <div className='project_1_mid_1_flex'>
            <div>
              <p><span>CLIENT:</span> ENVATO MARKET</p>
            </div>
            <div>
              <p><span>DATE:</span> APRIL 2026</p>
            </div>
            <div>
              <p><span>AUTHOR:</span> PAUL TRUEMAN</p>
            </div>
          </div>
        </div>

        <div className='project_1_mid_2'>
          <div className='project_1_mid_2_up'>
            <img width={'48%'} height={455} src="assets/project_1_1.jpg" alt="Project 1 image" />
            <img width={'48%'} height={455} src="assets/project_1_2.jpg" alt="Project 1 image" />
            <img width={'48%'} height={455} src="assets/project_1_3.jpg" alt="Project 1 image" />
            <img width={'48%'} height={455} src="assets/project_1_4.jpg" alt="Project 1 image" />
          </div>

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

          <div className='project_1_mid_2_down'>
            <img width={'50%'} height={'100%'} src="assets/project_1_5.jpg" alt="" />
            <img width={'50%'} height={'100%'} src="assets/project_1_6.jpg" alt="" />
          </div>
        </div>

        <div className='project_mid_down'>
          <Link className='project_flex_link' href={''}>
            <FaCircleArrowLeft className='project_link_icon' />
            <p>PREV PROJECT</p>
          </Link>

          <Link href={'grid-1'}>
            <p>ALL PROJECTS</p>
          </Link>

          <Link className='project_flex_link' href={'/project-2'}>
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

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
    <div className='project_2_all'>
      <PersonalDodecahedron />

      <div className="project_2_up">
        <h1>Interior Design <span>Studio</span></h1>
        <button onClick={() => {
          document.getElementById('project_2_mid').scrollIntoView({ behavior: 'smooth' })
        }}>
          <p>READ MORE</p>
          <FaCircleArrowDown className='project_2_up_icon' />
        </button>
      </div>

      <div id='project_2_mid' className='project_2_mid'>

        <div className='project_2_mid_up'>
          <div className='project_2_mid_up_l'>
            <div className='project_2_mid_l_1'>
              <p>CLIENT: EVNATO MARKET</p>
              <p>DATE: APRIL 2026</p>
              <p>AUTHOR: PAUL TRUEMAN</p>
            </div>

            <div className='project_2_mid_l_2'>
              <h2>Simplicity, elegance, innovation!</h2>
              <p>A home surveillance camera that pays great attention to security and user privacy, featuring two modes to provide security
                while protecting personal privacy.The camera has an open and closed mode, we define the product to have clear two sides,
                expressing two working states and emotions.
              </p>
              <p>
                Presents a simple and quiet state when not in use, delivering a gentle and security.At the same time, the camera
                can adapt to a variety of environments, providing elegant ways of wall hanging and standing installation.
              </p>
            </div>

            <button>
              <p>VISIT WEBSITE</p>
              <FaCircleArrowRight className='project_2_mid_icon' />
            </button>
          </div>

          <div className='project_2_mid_up_r'>
            <img width={550} height={350} src="assets/project_2_1.gif?v=1" alt="Project 2 image" />
            <img width={550} height={350} src="assets/project_2_2.jpg" alt="Project 2 image" />
            <img width={550} height={350} src="assets/project_2_3.jpg" alt="Project 2 image" />
            <img width={550} height={350} src="assets/project_2_4.jpg" alt="Project 2 image" />
          </div>
        </div>

        <div className='project_mid_down'>
          <Link className='project_flex_link' href={'/project-1'}>
            <FaCircleArrowLeft className='project_link_icon' />
            <p>PREV PROJECT</p>
          </Link>

          <Link href={'grid-1'}>
            <p>ALL PROJECTS</p>
          </Link>

          <Link className='project_flex_link' href={'/project-3'}>
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

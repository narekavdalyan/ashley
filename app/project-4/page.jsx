'use client'

import React from 'react'
import ContactBox from '../components/contact_block/ContactBox'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from 'next/link';
import DragSlider from '../components/dragSlider/DragSlider';
import { PersonalDodecahedron } from '../components/dodechedron/newBackground';

const page = () => {
  return (

    <div className='project_4_all'>
      <PersonalDodecahedron />

      <div className="project_4_up">
        <h1>Cascade <span>of Lava</span></h1>
        <button onClick={() => {
          document.getElementById('project_4_mid').scrollIntoView({ behavior: 'smooth' })
        }}>
          <p>READ MORE</p>
          <FaCircleArrowDown className='project_4_up_icon' />
        </button>
      </div>

      <div id='project_4_mid' className='project_4_mid'>

        <DragSlider />

        <div className='project_4_mid_2'>
          <h2>
            Lava Photos taken at Hawaii <br />
            Volcanoes National Park.
          </h2>

          <p>
            This collection of Hawaii photography is focused on the immense power of lava at the Volcanos National Park on the Big
            Island of Hawaii. One of the most truly mystical scenes I have ever had the pleasure of capturing. For this still
            keep these scenes natural and true to what I witnessed on my journey. For that reason, these images have been only
            lightly processed. All of these images are single exposures, unless listed otherwise in the caption below the photo.
          </p>

          <img src="assets/project_4_1.jpg" alt="Project 4 Image" width={'100%'} />
        </div>

        <div className='project_mid_down'>
          <Link className='project_flex_link' href={'/project-3'}>
            <FaCircleArrowLeft className='project_link_icon' />
            <p>PREV PROJECT</p>
          </Link>

          <Link href={'grid-1'}>
            <p>ALL PROJECTS</p>
          </Link>

          <Link className='project_flex_link' href={'/project-5'}>
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

'use client'

import React, { useState } from 'react'
import './style.css'
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiArrowCircleRightFill } from "react-icons/pi";
import { FaCircleArrowRight } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {

  const footer_links = [
    { title: 'Home', id: 1, href: '/' },
    { title: 'Portfolio', id: 2, href: '/grid-1' },
    { title: 'Services', id: 3, href: '/services' },
    { title: 'Contact', id: 4, href: '/contact' },
    { title: 'Blog', id: 5, href: '/blog' }
  ]

  const [LinkClickedId, setLinkClickedId] = useState();

  return (
    <div className='footer_all'>
      <div className='footer_up'>
        <div>
          <h1>Ashley.</h1>
          <h5>Subscribe our newsletter:</h5>
          <form>
            <input type="text" placeholder='ENTER YOUR EMAIL'/>
            <PiArrowCircleRightFill className='footer_arrow_icon'/> 
          </form>
        </div>

        <div>
          {
            footer_links.map((link) => (
              <Link
              href={link.href} 
              key={link.id} 
              onClick={() => {setLinkClickedId(link.id)}} 
              className={`${LinkClickedId === link.id && 'active'} footer_link`}
              >{link.title}</Link>
            ))
          }
        </div>

        <div>
          <h4>Privacy Policy</h4>
          <h4>Terms and conditions</h4>
          <h4>Cookie Policy</h4>
          <h4>Careers</h4>
        </div>
      </div>

      <div className='footer_down'>
        <div className='footer_down_item'>
          <div className='footer_social'>
            <FaBehance className='footer_social_icon'/>
            <FaDribbble className='footer_social_icon'/>
            <FaTwitter className='footer_social_icon'/>
            <FaGithub className='footer_social_icon'/>
          </div>

          <p>© Copyright 2023 - Mil. All Rights Reserved.</p>
        </div>

        <div className='footer_down_item'>
          <h3>Canada</h3>
          <p>71 South Los Carneros Road, California +51 174 705 812</p>
        </div>

        <div className='footer_down_item'>
          <h3>Germany</h3>
          <p>Leehove 40, 2678 MC De Lier, Netherlands +31 174 705 811</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

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
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t, i18n} = useTranslation();

  const footer_links = [
    { title: `${t('footer.link_1')}`, id: 1, href: '/' },
    { title: `${t('footer.link_2')}`, id: 2, href: '/grid-1' },
    { title: `${t('footer.link_3')}`, id: 3, href: '/services' },
    { title: `${t('footer.link_4')}`, id: 4, href: '/contact' },
    { title: `${t('footer.link_5')}`, id: 5, href: '/blog' }
  ]

  const [LinkClickedId, setLinkClickedId] = useState();

  return (
    <div className='footer_all'>
      <div className='footer_up'>
        <div>
          <h1>{t('footer.title')}</h1>
          <h5>{t('footer.subtitle')}</h5>
          <form>
            <input type="text" placeholder={t('footer.placeholder')}/>
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
          <h4>{t('footer.up_right_1')}</h4>
          <h4>{t('footer.up_right_2')}</h4>
          <h4>{t('footer.up_right_3')}</h4>
          <h4>{t('footer.up_right_4')}</h4>
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

          <p>{t('footer.down_p')}</p>
        </div>

        <div className='footer_down_item'>
          <h3>{t('footer.down_title_1')}</h3>
          <p>{t('footer.down_desc_1')}</p>
        </div>

        <div className='footer_down_item'>
          <h3>{t('footer.down_title_2')}</h3>
          <p>{t('footer.down_desc_2')}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

'use client'

import React, { useRef } from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'
import SideLabel2 from '../components/sideLabel2/SideLabel2';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';


const page = () => {
  const { t, i18n } = useTranslation();

  const section1Ref = useRef(null);

  return (
    <div className='publication_all'>
      <h1>
        {t('publication.title.1')} <span>{t('publication.title.2')}</span> <br />
        {t('publication.title.3')} <span>{t('publication.title.4')}</span>
      </h1>

      <div ref={section1Ref} id='home_1_section' className='public_img_div'>
        <img width={'100%'} src="assets/categories_1.jpg" alt="Category IMAGE" />
        <div>
          <p><span>{t('publication.img_text_1')}</span> {t('publication.img_text_2')}</p>
          <p><span>{t('publication.img_text_3')}</span> {t('publication.img_text_4')}</p>
          <p><span>{t('publication.img_text_5')}</span> {t('publication.img_text_6')}</p>
        </div>
      </div>

      <SideLabel2 section1Ref={section1Ref} />

      <div className='public_mid_justify'>
        <p className='mid_p1'>{t('publication.mid_p1')}</p>

        <div className='public_border_div'>{t('publication.mid_div1')}</div>

        <div>
          <h2>{t('publication.mid_title1')}</h2>
          <p>{t('publication.mid_p2')}</p>
        </div>

        <div>
          <h2>{t('publication.mid_title2')}</h2>
          <p>{t('publication.mid_p3')}</p>
        </div>

        <div>
          <h2>{t('publication.mid_title3')}</h2>
          <p>{t('publication.mid_p4')}</p>
        </div>

        <div>
          <h2>{t('publication.mid_title4')}</h2>
          <p>{t('publication.mid_p5')}</p>
        </div>


        <div className='public_mid_images'>
          <img width={'50%'} src="assets/categories_2.jpg" alt="Category Image" />
          <img width={'50%'} src="assets/publication_mid_2.jpg" alt="" />
        </div>

        <p className='mid_img_p'>{t('publication.mid_p6')}</p>
        <div className='public_border_div'>{t('publication.mid_div2')}</div>
        <p className='mid_bottom_p'>{t('publication.mid_p7')}</p>
        <p className='mid_bottom_p'>{t('publication.mid_p8')}</p>
      </div>


      <section className="home_6_all home_section">
        <div className="h_6_up">
          <h2> {t('home.home_6.title')}</h2>

          <Link href={'/blog'}>
            <button>
              <p> {t('home.home_6.up_btn')}</p>
              <div> <FaCircleArrowRight className="h_6_arrow_icon" /></div>
            </button>
          </Link>
        </div>

        <div className="h_6_down">
          <Link href={'/publication'} className="h_6_down_box">
            <img src="assets/home_6_1.jpg" alt="" width={'100%'} height={300} />
            <p className="h_6_p1"><span> {t('home.home_6.box_1.category')}</span> {t('home.home_6.box_1.date')}</p>
            <h2>{t('home.home_6.box_1.title')}</h2>
            <p className="h_6_p2">{t('home.home_6.box_1.desc')}</p>
            <button>
              <p>{t('home.home_6.box_1.btn')}</p>
              <div> <FaCircleArrowRight className="h_6_arrow_icon" /></div>
            </button>
          </Link>

          <Link href={'/publication'} className="h_6_down_box">
            <img src="assets/home_6_2.jpg" alt="" width={'100%'} height={300} />
            <p className="h_6_p1"><span>{t('home.home_6.box_2.category')}</span> {t('home.home_6.box_2.date')}</p>
            <h2>{t('home.home_6.box_2.title')}</h2>
            <p className="h_6_p2">{t('home.home_6.box_2.desc')}</p>
            <button>
              <p>{t('home.home_6.box_2.btn')}</p>
              <div> <FaCircleArrowRight className="h_6_arrow_icon" /></div>
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default page

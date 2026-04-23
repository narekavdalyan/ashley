'use client'

import { useState, useRef } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCirclePause } from "react-icons/fa6";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import Link from "next/link";

import Dodechedron from "./components/dodechedron/newBackground";
import { Home2 } from "./components/dodechedron/newBackground";
import SideLabel2 from "./components/sideLabel2/SideLabel2";
import { useTranslation } from "react-i18next";


export default function Home() {

  const { t, i18n } = useTranslation()

  const section1Ref = useRef(null);
  const team_images = [
    { id: 1, src: '/assets/home_5_1.jpg' },
    { id: 2, src: '/assets/home_5_2.jpg' },
    { id: 3, src: '/assets/home_5_3.jpg' },
    { id: 4, src: '/assets/home_5_4.jpg' },
    { id: 5, src: '/assets/home_5_5.jpg' },
    { id: 6, src: '/assets/home_5_6.jpg' },
    { id: 7, src: '/assets/home_5_7.jpg' },
  ]
  const [clickedTeamImgId, setClickedTeamImgId] = useState(null);
  const team_desc = [
    { id: 1, name: `${t('home.home_5.team_desc.desc_1.name')}`, company: `${t('home.home_5.team_desc.desc_1.company')}`, desc: `${t('home.home_5.team_desc.desc_1.desc')}` },
    { id: 2, name: `${t('home.home_5.team_desc.desc_2.name')}`, company: `${t('home.home_5.team_desc.desc_2.company')}`, desc: `${t('home.home_5.team_desc.desc_2.desc')}` },
  ]

  const home_5_descRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const images = [
    '/assets/home_5_slider_2.svg',
    '/assets/home_5_slider_1.svg',
    '/assets/home_5_slider_2.svg',
    '/assets/home_5_slider_1.svg',
    '/assets/home_5_slider_2.svg',
  ]

  const team_cards = [
    {
      id: 1,
      src: 'assets/home_4_1.png',
      href: '/personal',
      name: 'Anna Oldman',
      proffession: 'ART DIRECTOR'
    },
    {
      id: 2,
      src: 'assets/home_4_3.png',
      href: '/personal',
      name: 'Oscar Freeman',
      proffession: 'FRONTEND DEV'
    },
  ]

  const team_cards_2 = [
    {
      id: 1,
      src: 'assets/home_4_2.png',
      href: '/personal',
      name: 'Emma Newman',
      proffession: 'FOUNDER'
    },
    {
      id: 2,
      src: 'assets/home_4_4.png',
      href: '/personal',
      name: 'Lisa Trueman',
      proffession: 'UI/UX DESIGNER'
    },
  ]


  return (
    <main className="home_all">

      <Dodechedron />

      <section ref={section1Ref} id="home_1_section" className="home_1_all home_section">

        <h1>{t('home.home_1.title.word_1')} <span>{t('home.home_1.title.word_2')}</span> {t('home.home_1.title.word_3')} <span> {t('home.home_1.title.word_4')}</span> </h1>
        <p>{t('home.home_1.desc')}</p>
        <div className="home_1_btns_div">
          <div className="home_1_left_btns">
            <Link href={'/services'} className="home_1_left_btn">
              <div>{t('home.home_1.btn_1')}</div>
              <div> <FaCircleArrowRight className="head_arrow_icon" /></div>
            </Link>

            <Link href={'/grid-1'} className="home_1_right_btn">
              <div>{t('home.home_1.btn_2')}</div>
              <div> <FaCircleArrowRight className="head_arrow_icon_2" /></div>
            </Link>
          </div>

          <div className="home_1_scroll_div">

            <svg width="120" height="120" viewBox="0 0 200 200" className="home_1_svg" onClick={() => {
              document.getElementById('home_2_section').scrollIntoView({ behavior: 'smooth' })
            }}>
              <defs>
                <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>

              <text fontSize="14" fill="white">
                <textPath href="#circlePath" startOffset='0%' textLength='450'>
                  SCROLL DOWN - SCROLL DOWN -
                </textPath>
              </text>
            </svg>

            <div className="home_1_circle_orange">
              <FaCircleArrowDown className="home_1_arr_down_icon" />
            </div>
          </div>
        </div>

      </section>

      <SideLabel2 section1Ref={section1Ref} />

      <section id="home_2_section" className="home_2_all home_section">
        <div className="home_2_left">
          <h1>{t('home.home_2.title.word_1')}  <span> {t('home.home_2.title.word_2')} </span></h1>
          <p>{t('home.home_2.desc.desc_1')}</p>
          <p>{t('home.home_2.desc.desc_2')}</p>

          <div className="home_2_left_bottom">
            <div className="home_2_img_container">
              <div className="home_2_left_img"></div>
              <FaCirclePause className="home_2_pause_icon" />
            </div>

            <h3>{t('home.home_2.img_desc.desc_1')} <span>{t('home.home_2.img_desc.desc_2')}</span>{t('home.home_2.img_desc.desc_3')} <span>{t('home.home_2.img_desc.desc_4')}</span> </h3>
          </div>
        </div>

        <div className="home_2_right">
          <img src="assets/home_2_1.jpg" width={'100%'} height={500} alt="Home 2 img" />
        </div>
      </section>


      <section className="home_3_all home_section">

        <Home2 />

        <div className="h_3_up">
          <p>
            {t('home.home_3.up_text_1')} <br />
            {t('home.home_3.up_text_2')}
          </p>
          <span></span>
        </div>


        <div className="home_3_center">
          <div className="h_3_center_item">
            <div className="h_3_img"></div>
            <h2>{t('home.home_3.title.center_1_1')} <span>{t('home.home_3.title.center_1_2')}</span> </h2>
          </div>

          <div className="h_3_center_item">
            <h2>{t('home.home_3.title.center_2_1')} <span>{t('home.home_3.title.center_2_2')}</span></h2>
            <button className="home_1_left_btn">
              <Link href={'/services'}>{t('home.home_3.center_btn')}</Link>
              <div> <FaCircleArrowRight className="head_arrow_icon" /></div>
            </button>
          </div>
        </div>

        <div className="h_3_down">
          <Link href={'/services/single'} className="h_3_d_item">
            <div className="h_3_down_position"></div>

            <h3>
              {t('home.home_3.title.down_1_1')} <br />
              {t('home.home_3.title.down_1_2')}
            </h3>

            <p>{t('home.home_3.down_desc')}</p>

            <div className="h_3_icon_div">
              <BsArrowRightCircleFill className="h_3_d_icon" />
            </div>
          </Link>

          <Link href={'/services/single'} className="h_3_d_item">
            <div className="h_3_down_position"></div>

            <h3>
              {t('home.home_3.title.down_2_1')} <br />
              {t('home.home_3.title.down_2_2')}
            </h3>

            <p>{t('home.home_3.down_desc')}</p>

            <div className="h_3_icon_div">
              <BsArrowRightCircleFill className="h_3_d_icon" />
            </div>
          </Link>

          <Link href={'/services/single'} className="h_3_d_item">
            <div className="h_3_down_position"></div>

            <h3>
              {t('home.home_3.title.down_3_1')} <br />
              {t('home.home_3.title.down_3_2')}
            </h3>

            <p>{t('home.home_3.down_desc')}</p>

            <div className="h_3_icon_div">
              <BsArrowRightCircleFill className="h_3_d_icon" />
            </div>
          </Link>

          <Link href={'/services/single'} className="h_3_d_item">
            <div className="h_3_down_position"></div>

            <h3>
              {t('home.home_3.title.down_4_1')} <br />
              {t('home.home_3.title.down_4_2')}
            </h3>

            <p>{t('home.home_3.down_desc')}</p>

            <div className="h_3_icon_div">
              <BsArrowRightCircleFill className="h_3_d_icon" />
            </div>
          </Link>
        </div>
      </section>

      <section className="home_4_all home_section">
        <div className="home_4_left">
          <h2>{t('home.home_4.title.up_1')} <br />{t('home.home_4.title.up_2')}</h2>
          <p>
            {t('home.home_4.desc_1')}
          </p>

          <p>
            {t('home.home_4.desc_2')}
          </p>

          <button>
            <Link href={'/team'}>{t('home.home_4.btn')}</Link>
            <div> <FaCircleArrowRight className="h_4_arrow_icon" /></div>
          </button>

          <p> <span>{t('home.home_4.btn_down.down_1')}</span> {t('home.home_4.btn_down.down_2')} <span>{t('home.home_4.btn_down.down_3')}</span>{t('home.home_4.btn_down.down_4')}</p>

        </div>

        <div className="home_4_right">
          <div className="h_4_right_1">
            {
              team_cards.map((card) => (
                <div key={card.id} className="h_4_img_div">
                  <img src={card.src} alt="" width={'100%'} height={'100%'} />
                  <div className="h_4_img_hover_div">
                    <Link href={card.href}><h2>{card.name}</h2></Link>
                    <h3>{card.proffession}</h3>
                    <div className='h_4_social'>
                      <FaBehance className='h_4_social_icon' />
                      <FaDribbble className='h_4_social_icon' />
                      <FaTwitter className='h_4_social_icon' />
                      <FaGithub className='h_4_social_icon' />
                    </div>
                    <div className="h_4_hover_line"></div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="h_4_right_2">
            <p><span>*</span> {t('home.home_4.right_desc')}</p>
            {
              team_cards_2.map((card) => (
                <div key={card.id} className="h_4_img_div">
                  <img src={card.src} alt="" width={'100%'} height={'100%'} />
                  <div className="h_4_img_hover_div">
                    <Link href={card.href}><h2>{card.name}</h2></Link>
                    <h3>{card.proffession}</h3>
                    <div className='h_4_social'>
                      <FaBehance className='h_4_social_icon' />
                      <FaDribbble className='h_4_social_icon' />
                      <FaTwitter className='h_4_social_icon' />
                      <FaGithub className='h_4_social_icon' />
                    </div>
                    <div className="h_4_hover_line"></div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className="home_5_all home_section">
        <div className="h_5_up">
          <p>
            {t('home.home_5.up_desc_1')} <br />
            {t('home.home_5.up_desc_2')}
          </p>
          <span></span>
        </div>

        <h2>
          {t('home.home_5.title.1')} <span>{t('home.home_5.title.2')}</span> <br />
          {t('home.home_5.title.3')} <span>{t('home.home_5.title.4')}</span>
        </h2>

        <div className="h_5_team_images">
          {
            team_images.map((item) => (
              <div key={item.id} className={` ${clickedTeamImgId === item.id ? 'active_img' : 'not_active_img'} h_5_team_img_div`}>
                <img src={item.src} alt="team img" width={100} height={100} onClick={() => {
                  setClickedTeamImgId(item.id);
                  setAnimationPlayed(!animationPlayed);
                }} />
              </div>
            ))
          }
        </div>

        <div className="h_5_icon_div">
          <RiDoubleQuotesR className="h_5_icon" />
        </div>

        <div ref={home_5_descRef} className={`h_5_desc_container ${animationPlayed ? 'animate_right' : 'animate_left'}`}>
          <h3>{clickedTeamImgId % 2 === 1 ? team_desc[0].name : team_desc[1].name}</h3>
          <h4>{clickedTeamImgId % 2 === 1 ? team_desc[0].company : team_desc[1].company}</h4>
          <p>{clickedTeamImgId % 2 === 1 ? team_desc[0].desc : team_desc[1].desc}</p>
        </div>


        <div className="home_slider">
          <div className="home_slider_track">
            {[...images, ...images].map((item, i) => (
              <div className="slide" key={i}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

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

    </main>
  );
}
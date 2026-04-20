'use client'

import { useState, useEffect, useRef } from "react";
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


export default function Home() {

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
    { id: 1, name: 'Sarah Newman', company: 'ENVATO MARKET', desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,' },
    { id: 2, name: 'Emma Trueman', company: 'ENVATO MARKET', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.' },
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

        <h1>Designing <span>a Better</span>  World <span>Today</span> </h1>
        <p>Welcome to our world of endless imagination and boundless creativity. Together, let's embark on a remarkable journey where dreams become tangible realities.</p>
        <div className="home_1_btns_div">
          <div className="home_1_left_btns">
            <Link href={'/services'} className="home_1_left_btn">
              <div> WHAT WE DO</div>
              <div> <FaCircleArrowRight className="head_arrow_icon" /></div>
            </Link>

            <Link href={'/grid-1'} className="home_1_right_btn">
              <div>VIEW WORKS</div>
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
          <h1>Discover <br /> Our <span>Studio</span></h1>
          <p>At our design studio, we are a collective of talented individuals ignited by our unwavering passion for transforming ideas into reality. With a harmonious blend of diverse backgrounds and a vast array of skill sets, we join forces to create compelling solutions for our esteemed clients.</p>
          <p>Collaboration is at the heart of what we do. Our team thrives on the synergy that arises when unique perspectives converge, fostering an environment of boundless creativity. By harnessing our collective expertise, we produce extraordinary results that consistently surpass expectations.</p>

          <div className="home_2_left_bottom">
            <div className="home_2_img_container">
              <div className="home_2_left_img"></div>
              <FaCirclePause className="home_2_pause_icon" />
            </div>

            <h3>Passionately Creating <span>Design Wonders:</span>  Unleashing <span>Boundless Creativity</span> </h3>
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
            Professionals focused on helping your brand <br />
            grow and move forward.
          </p>
          <span></span>
        </div>


        <div className="home_3_center">
          <div className="h_3_center_item">
            <div className="h_3_img"></div>
            <h2>Unique <span>Ideas</span> </h2>
          </div>

          <div className="h_3_center_item">
            <h2>For Your <span>Business.</span></h2>
            <button className="home_1_left_btn">
              <Link href={'/services'}> WHAT WE DO</Link>
              <div> <FaCircleArrowRight className="head_arrow_icon" /></div>
            </button>
          </div>
        </div>

        <div className="h_3_down">
          <Link href={'/services/single'} className="h_3_d_item">
            <div className="h_3_down_position"></div>

            <h3>
              Branding and <br />
              Identity Design
            </h3>

            <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>

            <div className="h_3_icon_div">
              <BsArrowRightCircleFill className="h_3_d_icon" />
            </div>
          </Link>

          <Link href={'/services/single'} className="h_3_d_item">
            <div className="h_3_down_position"></div>

            <h3>
              Website Design <br />
              and Development
            </h3>

            <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>

            <div className="h_3_icon_div">
              <BsArrowRightCircleFill className="h_3_d_icon" />
            </div>
          </Link>

          <Link href={'/services/single'} className="h_3_d_item">
            <div className="h_3_down_position"></div>

            <h3>
              Advertising and <br />
              Marketing Campaigns
            </h3>

            <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>

            <div className="h_3_icon_div">
              <BsArrowRightCircleFill className="h_3_d_icon" />
            </div>
          </Link>

          <Link href={'/services/single'} className="h_3_d_item">
            <div className="h_3_down_position"></div>

            <h3>
              Creative Consulting <br />
              and Development
            </h3>

            <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>

            <div className="h_3_icon_div">
              <BsArrowRightCircleFill className="h_3_d_icon" />
            </div>
          </Link>
        </div>
      </section>

      <section className="home_4_all home_section">
        <div className="home_4_left">
          <h2>Meet <br />Our Team</h2>
          <p>
            We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds
            and skill sets, we collaborate to produce effective solutions for our clients.
          </p>

          <p>
            Together, our creative team is committed to delivering impactful work that exceeds expectations.
          </p>

          <button>
            <Link href={'/team'}>READ MORE</Link>
            <div> <FaCircleArrowRight className="h_4_arrow_icon" /></div>
          </button>

          <p> <span>We</span> delivering <span>exceptional</span> results.</p>

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
            <p><span>*</span> The founders of our agency</p>
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
            Professionals focused on helping your brand <br />
            grow and move forward.
          </p>
          <span></span>
        </div>

        <h2>
          Customer <span>Voices:</span> <br />
          Hear What <span>They Say!</span>
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
          <h2>Popular Publications:</h2>

          <Link href={'/blog'}>
            <button>
              <p>VIEW ALL</p>
              <div> <FaCircleArrowRight className="h_6_arrow_icon" /></div>
            </button>
          </Link>
        </div>

        <div className="h_6_down">
          <Link href={'/publication'} className="h_6_down_box">
            <img src="assets/home_6_1.jpg" alt="" width={'100%'} height={300} />
            <p className="h_6_p1"><span>TECHNOLOGY</span> MAY 24 2023</p>
            <h2>How to Become a Graphic Designer in 10 Simple Steps</h2>
            <p className="h_6_p2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae,
              eos necessitatibus nisi. Nam cupiditate...
            </p>
            <button>
              <p>READ MORE</p>
              <div> <FaCircleArrowRight className="h_6_arrow_icon" /></div>
            </button>
          </Link>

          <Link href={'/publication'} className="h_6_down_box">
            <img src="assets/home_6_2.jpg" alt="" width={'100%'} height={300} />
            <p className="h_6_p1"><span>TECHNOLOGY</span> MAY 24 2023</p>
            <h2>16 Best Graphic Design Online and Offline Courses</h2>
            <p className="h_6_p2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae,
              eos necessitatibus nisi. Nam cupiditate...
            </p>
            <button>
              <p>READ MORE</p>
              <div> <FaCircleArrowRight className="h_6_arrow_icon" /></div>
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}
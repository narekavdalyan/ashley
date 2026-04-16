'use client'

import React, { useRef } from 'react'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { PersonalDodecahedron } from '@/app/components/dodechedron/newBackground';
import './style.css'
import { useState } from 'react';
import Link from 'next/link';
import SideLabel2 from '@/app/components/sideLabel2/SideLabel2';



const page = () => {

    const section1Ref = useRef(null);

    const up_items = [
        {
            id: 1,
            title: 'UX AUDITS',
            desc: 'A UX audit is a service that evaluates the user experience (UX) of a website. It involves analyzing the  websites design, functionality, and content to identify areas of improvement that can enhance the users overall experience.During a UX audit, a team of UX experts will conduct a thorough review of the website and provide a comprehensive report that outlines specific recommendations for improving the websites usability, accessibility, and overall user experience.The audit may cover various aspects of the website, such as navigation, layout, visual design, content structure, and mobile responsiveness.The goal is to identify any pain points or obstacles that users may encounter while browsing the website and provide actionable recommendations to improve their experience.In summary, a UX audit can help website owners identify areas of improvement that can enhance their websites user experience and increase user engagement and satisfaction'
        },
        {
            id: 2,
            title: 'DESIGN THINKING',
            desc: 'Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration. It involves understanding the needs and perspectives of users, identifying and defining the problem, generating multiple possible solutions, prototyping and testing those solutions, and iterating based on feedback. Design thinking encourages a human-centered approach to innovation and is often used in fields such as product design, user experience (UX) design, and business strategy to create user-centric and innovative solutions. It promotes a mindset that embraces experimentation, iteration, and continuous learning throughout the design process.'
        },
        {
            id: 3,
            title: 'WIREFRAMING',
            desc: 'Wireframing is a vital step in web design where a visual representation of a websites structure is created. It focuses on layout and user experience, using basic shapes and lines to outline elements like headers, menus, and content sections. Wireframes establish the websites architecture and functionality, facilitating communication between designers, developers, and clients. They serve as a blueprint for user-friendly websites, setting the foundation for design and development'
        },
        {
            id: 4,
            title: 'AESTHETICS',
            desc: 'Aesthetics in web design focus on the visual appeal of a website, incorporating elements like colors, typography, images, and layout. It aims to create an engaging and visually pleasing user experience that reflects the brand identity and purpose of the website. A well-designed aesthetic balances visual appeal with functionality, leaving a lasting impression on users'
        },
        {
            id: 5,
            title: 'METHODOLOGIES',
            desc: 'Libero quam alias tempora facilis necessitatibus quis officiis voluptatem architecto harum exercitationem quidem illum eligendi. Veniam non vitae, nemo dolor tempora, necessitatibus enim sapiente quam voluptas architecto minima omnis sequi aperiam aliquam vel quo reprehenderit, tempore tenetur. Architecto dolorem assumenda voluptas, odio nemo vero illo praesentium pariatur, ut perspiciatis, est itaque minus ratione vitae laboriosam molestiae'
        }

    ]

    const [openDescId, setOpenDescId] = useState(null);

    const toggleDescription = (id) => {
        setOpenDescId(openDescId === id ? null : id);
    };

    return (
        <div className='single_service_all'>
            <PersonalDodecahedron />
            <div ref={section1Ref} id='home_1_section' className='single_service_up'>
                <div className='single_up_1'>
                    <h2>
                        Website <span>Design</span> <br />
                        and <span>Development</span>
                    </h2>

                    <div onClick={() => { document.getElementById('service_details').scrollIntoView({ behavior: 'smooth' }) }}>
                        <p>ABOUT SERVICE</p>
                        <FaCircleArrowDown className='single_up_icon' />
                    </div>
                </div>

                <div id='service_details' className='single_up_2'>
                    <div className='single_up_2_left'>
                        <h2>
                            Your <span>Approach</span> <br />
                            and <span>Work Specifics</span>
                        </h2>

                        <p>
                            At our agency, we have a unique approach to web design and development. We believe in creating websites that not only look great but also perform well in terms of user experience, functionality, and search engine optimization.
                        </p>

                        <div>
                            <p className='single_up_left_btn'>VIEW WORKS</p>
                            <FaCircleArrowRight className='single_up_icon' />
                        </div>
                    </div>

                    <div className='single_up_2_right'>
                        {
                            up_items.map((item) => (
                                <div key={item.id} className='single_up_2_right_item'>
                                    <div className='single_right_item_title' onClick={() => { toggleDescription(item.id) }}>
                                        <h3>{item.title}</h3>

                                        {openDescId === item.id ?
                                            <FaCircleMinus className='single_r_item_btn single_r_item_btn_minus' /> :
                                            <FaCirclePlus className='single_r_item_btn single_r_item_btn_plus' />}
                                    </div>


                                    <p className={`single_item_desc ${openDescId === item.id ? 'open' : ''}`}>{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

            <SideLabel2 section1Ref={section1Ref} />

            <div className='single_service_mid'>
                <div className='single_mid_up'>
                    <h1>
                        Reasonable <span>prices</span> <br />
                        for innovative <span>solutions</span>
                    </h1>

                    <p>
                        At our agency, we have a unique approach to web design and development. <br />
                        We believe in creating in terms of user experience, functionality.
                    </p>
                </div>

                <Link href={'/contact'} className='single_mid_body'>
                    <div className="single_mid_body_item">
                        <h2>
                            <span>$</span>19
                        </h2>
                        <h3>Tailored Designs for <br />
                            Every Budget
                        </h3>
                        <p>
                            Tomlo commodi, mollitia atque betae esse itaque a, <br />
                            voluptatibus, suscipit beatae afficiis amnis.
                        </p>

                        <FaCircleArrowRight className='single_mid_body_btn' />
                    </div>

                    <div className="single_mid_body_item">
                        <h2>
                            <span>$</span>29
                        </h2>
                        <h3>
                            Inspiring and Customized <br />
                            Design Solutions
                        </h3>
                        <p>
                            Tomlo commodi, mollitia atque betae esse itaque a, <br />
                            voluptatibus, suscipit beatae afficiis amnis.
                        </p>

                        <FaCircleArrowRight className='single_mid_body_btn' />
                    </div>

                    <div className="single_mid_body_item">
                        <h2>
                            <span>$</span>49
                        </h2>
                        <h3>
                            Unleashing the Beauty of Space <br />
                            with Unique Designs
                        </h3>
                        <p>
                            Tomlo commodi, mollitia atque betae esse itaque a, <br />
                            voluptatibus, suscipit beatae afficiis amnis.
                        </p>

                        <FaCircleArrowRight className='single_mid_body_btn' />
                    </div>

                    <div className="single_mid_body_item">
                        <h2>
                            <span>$</span>199
                        </h2>
                        <h3>
                            Exquisite Design Concepts <br />
                            for Discerning Clients
                        </h3>
                        <p>
                            Tomlo commodi, mollitia atque betae esse itaque a, <br />
                            voluptatibus, suscipit beatae afficiis amnis.
                        </p>

                        <FaCircleArrowRight className='single_mid_body_btn' />
                    </div>
                </Link>

                <Link href={'/contact'} className='single_mid_bottom_btn'>
                    INDIVIDUAL SOLUTION
                    <FaCircleArrowRight className='single_mid_body_icon' />
                </Link>

            </div>

            <div className='single_service_down'>
                <div className='single_down_head'>
                    <h2>
                        Other services
                    </h2>

                    <button>
                        <p>VIEW ALL</p>
                        <FaCircleArrowRight className='single_down_icon' />
                    </button>
                </div>

                <div className='single_down_container'>
                    <div className="single_down_item">
                        <h3>Branding and Identity Design</h3>
                        <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>
                        <ul>
                            <li>UX AUDITS</li>
                            <li>DESIGN THINKING</li>
                            <li>METHODOLOGIES</li>
                            <li>WIREFRAMING</li>
                        </ul>

                        <button>
                            READ MORE
                            <FaCircleArrowRight className='single_down_icon' />
                        </button>
                    </div>

                    <div className="single_down_item">
                        <h3>Advertising and Marketing</h3>
                        <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>
                        <ul>
                            <li>UX AUDITS</li>
                            <li>DESIGN THINKING</li>
                            <li>METHODOLOGIES</li>
                            <li>WIREFRAMING</li>
                        </ul>

                        <button>
                            READ MORE
                            <FaCircleArrowRight className='single_down_icon' />
                        </button>
                    </div>

                    <div className="single_down_item">
                        <h3>Creative Consulting</h3>
                        <p>Our creative agency is a team of professionals focused on helping your brand grow.</p>
                        <ul>
                            <li>UX AUDITS</li>
                            <li>DESIGN THINKING</li>
                            <li>METHODOLOGIES</li>
                            <li>WIREFRAMING</li>
                        </ul>

                        <button>
                            READ MORE
                            <FaCircleArrowRight className='single_down_icon' />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page

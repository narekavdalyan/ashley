'use client'

import React, { useRef, useState } from 'react'
import { PersonalDodecahedron } from '../components/dodechedron/newBackground'
import Link from 'next/link'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import SideLabel2 from '../components/sideLabel2/SideLabel2';


const page = () => {

    const all_categories = [
        
        {
            id: 1,
            span: 'ART',
            date: 'APR 08 2026',
            title: 'Color Psychology in Art and Design',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat',
            btn_text: 'READ MORE',
            src: 'assets/categories_2.jpg'
        },
        {
            id: 2,
            span: 'TECHNOLOGY',
            date: 'APR 08 2026',
            title: 'How to Create a Brand Guide for Your Client',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat',
            btn_text: 'READ MORE',
            src: 'assets/categories_1.jpg'
        },
        {
            id: 3,
            span: 'DESIGN',
            date: 'APR 08 2026',
            title: 'How to Design a Repeating Pattern',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat',
            btn_text: 'READ MORE',
            src: 'assets/categories_3.jpg'
        },
        {
            id: 4,
            span: 'CODE',
            date: 'APR 08 2026',
            title: 'How to Never Reach Creative Burnout',
            subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius sequi commodi dignissimos optio, beatae, eos necessitatibus nisi. Nam cupiditate consectetur nostrum qui! Repellat',
            btn_text: 'READ MORE',
            src: 'assets/categories_4.jpg'
        },
    ]

    const [activeCategory, setActiveCategory] = useState('ALL CATEGORIES');

    const filteredCategories = activeCategory === 'ALL CATEGORIES' ? all_categories : all_categories.filter((item) => (item.span === activeCategory))

    const nav_items = [
        { id: 1, name: 'DESIGN' },
        { id: 2, name: 'ART' },
        { id: 3, name: 'CODE' },
        { id: 4, name: 'TECHNOLOGY' },
        { id: 5, name: 'ALL CATEGORIES' }
    ];

    const [isClickedId, setIsclickedId] = useState(null)

    const section1Ref = useRef(null)

    return (
        <div className='blog_all'>
            <PersonalDodecahedron />
            <div ref={section1Ref}  id='home_1_section' className='blog_up'>
                <h1>
                    Exploring <span>the World</span> <br />
                    Through Our <span>Blog</span>
                </h1>

                <div onClick={() => { document.getElementById('grid_1_mid').scrollIntoView({ behavior: 'smooth' }) }}>
                    <p>OUR WORKS</p>
                    <FaCircleArrowDown className='blog_up_icon' />
                </div>
            </div>

            <SideLabel2 section1Ref={section1Ref} />

            <section className="home_6_all home_section">
                <div className="h_6_up">
                    <h2>Popular Publications:</h2>

                    <button>
                        <p>VIEW ALL</p>
                        <div> <FaCircleArrowRight className="h_6_arrow_icon" /></div>
                    </button>
                </div>

                <div className="h_6_down">
                    <div className="h_6_down_box">
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
                    </div>

                    <div className="h_6_down_box">
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
                    </div>
                </div>
            </section>

            <div className='blog_categories'>
                <div className='categories_header'>
                    <h2>Categpries:</h2>
                    <nav>
                        {
                            nav_items.map((item) => (
                                <p
                                    key={item.id}
                                    onClick={() => {
                                        setActiveCategory(item.name);
                                    }}
                                    className={`${activeCategory === item.name && 'active'}`}
                                >{item.name}</p>
                            ))
                        }
                    </nav>
                </div>

                {
                    filteredCategories.map((box) => (
                        <div key={box.id} className='blog_box'>
                            <img width={'450px'} height={'300px'} src={box.src} alt='Category img'></img>

                            <div className='blog_box_right'>
                                <h3><span>{box.span}</span> <p>{box.date}</p> </h3>
                                <h2>{box.title}</h2>
                                <h4>{box.subTitle}</h4>
                                <div>
                                    <p>{box.btn_text}</p>
                                    <FaCircleArrowRight className='blog_category_icon' />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className='services_down'>
                <div className='service_down_position'>
                    <p>Looking to make your mark? We'll help you turn yourr project into a success sotry.</p>
                    <span></span>
                </div>

                <h2>
                    Stay up-to-date <span>with the</span> <br />
                    latest news by <span>subscribing</span> <br />
                    to our <span>newsletter!</span>
                </h2>

                <div className='blog_input_div'>
                    <input type="text" placeholder='ENTER YOUR EMAIL' />
                    <Link href={'/contact'} ><FaCircleArrowRight className='blog_down_icon' /></Link>
                </div>


            </div>

        </div>
    )
}

export default page

'use client'

import React, { useRef, useState } from 'react'
import { PersonalDodecahedron } from '../components/dodechedron/newBackground'
import Link from 'next/link'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import SideLabel2 from '../components/sideLabel2/SideLabel2';
import { useTranslation } from 'react-i18next';


const page = () => {
    const {t, i18n} = useTranslation();

    const all_categories = [
        
        {
            id: 1,
            span: `${t('blog.all_categories.item_1.span')}`,
            date: `${t('blog.all_categories.item_1.date')}`,
            title: `${t('blog.all_categories.item_1.title')}`,
            subTitle: `${t('blog.all_categories.item_1.subTitle')}`,
            btn_text: `${t('blog.all_categories.item_1.btn_text')}`,
            src: 'assets/categories_2.jpg'
        },
        {
            id: 2,
            span: `${t('blog.all_categories.item_2.span')}`,
            date: `${t('blog.all_categories.item_2.date')}`,
            title: `${t('blog.all_categories.item_2.title')}`,
            subTitle: `${t('blog.all_categories.item_2.subTitle')}`,
            btn_text: `${t('blog.all_categories.item_2.btn_text')}`,
            src: 'assets/categories_1.jpg'
        },
        {
            id: 3,
             span: `${t('blog.all_categories.item_3.span')}`,
            date: `${t('blog.all_categories.item_3.date')}`,
            title: `${t('blog.all_categories.item_3.title')}`,
            subTitle: `${t('blog.all_categories.item_3.subTitle')}`,
            btn_text: `${t('blog.all_categories.item_3.btn_text')}`,
            src: 'assets/categories_3.jpg'
        },
        {
            id: 4,
            span: `${t('blog.all_categories.item_4.span')}`,
            date: `${t('blog.all_categories.item_4.date')}`,
            title: `${t('blog.all_categories.item_4.title')}`,
            subTitle: `${t('blog.all_categories.item_4.subTitle')}`,
            btn_text: `${t('blog.all_categories.item_4.btn_text')}`,
            src: 'assets/categories_4.jpg'
        },
    ]

    const [activeCategory, setActiveCategory] = useState('ALL CATEGORIES');

    const filteredCategories = activeCategory === 'ALL CATEGORIES' ? all_categories : all_categories.filter((item) => (item.span === activeCategory))

    const nav_items = [
        { id: 1, name: `${t('blog.nav_1_name')}` },
        { id: 2, name: `${t('blog.nav_2_name')}` },
        { id: 3, name: `${t('blog.nav_3_name')}` },
        { id: 4, name: `${t('blog.nav_4_name')}` },
        { id: 5, name: `${t('blog.nav_5_name')}` }
    ];

    const [isClickedId, setIsclickedId] = useState(null)

    const section1Ref = useRef(null)

    return (
        <div className='blog_all'>
            <PersonalDodecahedron />
            <div ref={section1Ref}  id='home_1_section' className='blog_up'>
                <h1>
                    {t('blog.title.1')} <span>{t('blog.title.2')}</span> <br />
                    {t('blog.title.3')} <span>{t('blog.title.4')}</span>
                </h1>

                <div onClick={() => { document.getElementById('grid_1_mid').scrollIntoView({ behavior: 'smooth' }) }}>
                    <p>{t('blog.up_btn')}</p>
                    <FaCircleArrowDown className='blog_up_icon' />
                </div>
            </div>

            <SideLabel2 section1Ref={section1Ref} />

            <section className="home_6_all home_section">
                <div className="h_6_up">
                    <h2>{t('blog.popular.title')}</h2>

                    <button>
                        <p>{t('blog.popular.btn')}</p>
                        <div> <FaCircleArrowRight className="h_6_arrow_icon" /></div>
                    </button>
                </div>

                <div className="h_6_down">
                    <div className="h_6_down_box">
                        <img src="assets/home_6_1.jpg" alt="" width={'100%'} height={300} />
                        <p className="h_6_p1"><span>{t('blog.popular.item_category')}</span> {t('blog.popular.item_date')}</p>
                        <h2>{t('blog.popular.item_1_title')}</h2>
                        <p className="h_6_p2">
                           {t('blog.popular.item_desc')}
                        </p>
                        <button>
                            <p>{t('blog.popular.item_btn')}</p>
                            <div> <FaCircleArrowRight className="h_6_arrow_icon" /></div>
                        </button>
                    </div>

                    <div className="h_6_down_box">
                        <img src="assets/home_6_2.jpg" alt="" width={'100%'} height={300} />
                        <p className="h_6_p1"><span>{t('blog.popular.item_category')}</span> {t('blog.popular.item_date')}</p>
                        <h2>{t('blog.popular.item_2_title')}</h2>
                        <p className="h_6_p2">
                           {t('blog.popular.item_desc')}
                        </p>
                        <button>
                            <p>{t('blog.popular.item_btn')}</p>
                            <div> <FaCircleArrowRight className="h_6_arrow_icon" /></div>
                        </button>
                    </div>
                </div>
            </section>

            <div className='blog_categories'>
                <div className='categories_header'>
                    <h2>{t('blog.popular.categories')}</h2>
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
                    <p>{t('blog.down.text')}</p>
                    <span></span>
                </div>
                <h2>
                    {t('blog.down.title.1')} <span>{t('blog.down.title.2')}</span> <br />
                    {t('blog.down.title.3')} <span>{t('blog.down.title.4')}</span> <br />
                    {t('blog.down.title.5')} <span>{t('blog.down.title.6')}</span>
                </h2>
                <div className='blog_input_div'>
                    <input type="text" placeholder={t('blog.down.placeholder')} />
                    <Link href={'/contact'} ><FaCircleArrowRight className='blog_down_icon' /></Link>
                </div>
            </div>
        </div>
    )
}

export default page

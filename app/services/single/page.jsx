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
import { useTranslation } from 'react-i18next';



const page = () => {
    const { t, i18n } = useTranslation();
    const section1Ref = useRef(null);

    const up_items = [
        {
            id: 1,
            title: `${t('single.up_items.item_1.title')}`,
            desc: `${t('single.up_items.item_1.desc')}`
        },
        {
            id: 2,
            title: `${t('single.up_items.item_2.title')}`,
            desc: `${t('single.up_items.item_2.desc')}`
        },
        {
            id: 3,
            title: `${t('single.up_items.item_3.title')}`,
            desc: `${t('single.up_items.item_3.desc')}`
        },
        {
            id: 4,
            title: `${t('single.up_items.item_4.title')}`,
            desc: `${t('single.up_items.item_4.desc')}`
        },
        {
            id: 5,
            title: `${t('single.up_items.item_5.title')}`,
            desc: `${t('single.up_items.item_5.desc')}`
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
                        {t('single.title.1')} <span>{t('single.title.2')}</span> <br />
                        {t('single.title.3')} <span>{t('single.title.4')}</span>
                    </h2>

                    <div onClick={() => { document.getElementById('service_details').scrollIntoView({ behavior: 'smooth' }) }}>
                        <p>{t('single.up_btn')}</p>
                        <FaCircleArrowDown className='single_up_icon' />
                    </div>
                </div>

                <div id='service_details' className='single_up_2'>
                    <div className='single_up_2_left'>
                        <h2>
                            {t('single.title_2.1')}  <span>{t('single.title_2.2')} </span> <br />
                            {t('single.title_2.3')}  <span>{t('single.title_2.4')} </span>
                        </h2>

                        <p>{t('single.up_desc')}</p>

                        <div>
                            <p className='single_up_left_btn'>{t('single.up_left_btn')}</p>
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
                        {t('single.mid_up.title.1')} <span>{t('single.mid_up.title.2')}</span> <br />
                        {t('single.mid_up.title.3')} <span>{t('single.mid_up.title.4')}</span>
                    </h1>

                    <p>
                        {t('single.mid_up.desc.1')} <br />
                        {t('single.mid_up.desc.2')}
                    </p>
                </div>

                <Link href={'/contact'} className='single_mid_body'>
                    <div className="single_mid_body_item">
                        <h2>
                            <span>$</span>19
                        </h2>
                        <h3> {t('single.mid_body.item_1.title_1')} <br />
                            {t('single.mid_body.item_1.title_2')}
                        </h3>
                        <p>
                            {t('single.mid_body.item_desc_1')} <br />
                            {t('single.mid_body.item_desc_2')}
                        </p>

                        <FaCircleArrowRight className='single_mid_body_btn' />
                    </div>

                    <div className="single_mid_body_item">
                        <h2>
                            <span>$</span>29
                        </h2>
                        <h3>
                            {t('single.mid_body.item_2.title_1')} <br />
                            {t('single.mid_body.item_2.title_2')}
                        </h3>
                        <p>
                            {t('single.mid_body.item_desc_1')} <br />
                            {t('single.mid_body.item_desc_2')}
                        </p>

                        <FaCircleArrowRight className='single_mid_body_btn' />
                    </div>

                    <div className="single_mid_body_item">
                        <h2>
                            <span>$</span>49
                        </h2>
                        <h3>
                            {t('single.mid_body.item_3.title_1')} <br />
                            {t('single.mid_body.item_3.title_2')}
                        </h3>
                        <p>
                            {t('single.mid_body.item_desc_1')} <br />
                            {t('single.mid_body.item_desc_2')}
                        </p>

                        <FaCircleArrowRight className='single_mid_body_btn' />
                    </div>

                    <div className="single_mid_body_item">
                        <h2>
                            <span>$</span>199
                        </h2>
                       <h3>
                            {t('single.mid_body.item_4.title_1')} <br />
                            {t('single.mid_body.item_4.title_2')}
                        </h3>
                        <p>
                            {t('single.mid_body.item_desc_1')} <br />
                            {t('single.mid_body.item_desc_2')}
                        </p>

                        <FaCircleArrowRight className='single_mid_body_btn' />
                    </div>
                </Link>

                <Link href={'/contact'} className='single_mid_bottom_btn'>
                    {t('single.mid_btn')}
                    <FaCircleArrowRight className='single_mid_body_icon' />
                </Link>

            </div>

            <div className='single_service_down'>
                <div className='single_down_head'>
                    <h2>
                        {t('single.down.title')}
                    </h2>

                    <button>
                        <p>{t('single.down.up_btn')}</p>
                        <FaCircleArrowRight className='single_down_icon' />
                    </button>
                </div>

                <div className='single_down_container'>
                    <div className="single_down_item">
                        <h3>{t('single.down.item_1.title')}</h3>
                        <p>{t('single.down.item_1.desc')}</p>
                        <ul>
                            <li>{t('single.down.item_1.li_1')}</li>
                            <li>{t('single.down.item_1.li_2')}</li>
                            <li>{t('single.down.item_1.li_3')}</li>
                            <li>{t('single.down.item_1.li_4')}</li>
                        </ul>

                        <button>
                            {t('single.down.item_btn')}
                            <FaCircleArrowRight className='single_down_icon' />
                        </button>
                    </div>

                    <div className="single_down_item">
                        <h3>{t('single.down.item_2.title')}</h3>
                        <p>{t('single.down.item_2.desc')}</p>
                        <ul>
                            <li>{t('single.down.item_2.li_1')}</li>
                            <li>{t('single.down.item_2.li_2')}</li>
                            <li>{t('single.down.item_2.li_3')}</li>
                            <li>{t('single.down.item_2.li_4')}</li>
                        </ul>

                        <button>
                            {t('single.down.item_btn')}
                            <FaCircleArrowRight className='single_down_icon' />
                        </button>
                    </div>

                    <div className="single_down_item">
                        <h3>{t('single.down.item_3.title')}</h3>
                        <p>{t('single.down.item_3.desc')}</p>
                        <ul>
                            <li>{t('single.down.item_3.li_1')}</li>
                            <li>{t('single.down.item_3.li_2')}</li>
                            <li>{t('single.down.item_3.li_3')}</li>
                            <li>{t('single.down.item_3.li_4')}</li>
                        </ul>

                        <button>
                            {t('single.down.item_btn')}
                            <FaCircleArrowRight className='single_down_icon' />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page

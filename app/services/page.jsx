'use client'

import React, { useRef } from 'react'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { PersonalDodecahedron } from '../components/dodechedron/newBackground';
import Link from 'next/link';
import SideLabel2 from '../components/sideLabel2/SideLabel2';
import { useTranslation } from 'react-i18next';


const page = () => {
    const { t, i18n } = useTranslation()
    const section1Ref = useRef(null);

    return (
        <main className='services_all'>
            <PersonalDodecahedron />
            <div ref={section1Ref} id='home_1_section' className='services_up'>
                <h1>{t('services.title.1')} <span>{t('services.title.2')}</span> <br /> {t('services.title.3')} <span>{t('services.title.4')}</span></h1>
                <button onClick={() => {
                    document.getElementById('services_center').scrollIntoView({ behavior: 'smooth' });
                }}>
                    <p>{t('services.up_text')}</p>
                    <FaCircleArrowDown className='services_up_icon' />
                </button>
            </div>

            <SideLabel2 section1Ref={section1Ref} />

            <div id='services_center' className='services_centre'>

                <div className="wrapper">
                    <div className="grid"></div>

                    <div className="shape top"></div>
                    <div className="shape middle"></div>
                    <div className="shape bottom"></div>
                </div>

                <div className='services_center_right'>
                    <div className='service_right_up'>
                        <div className='services_right_item'>
                            <h2>{t('services.item_1.title_1')} <br /> {t('services.item_1.title_2')}</h2>
                            <h4>{t('services.item_desc')}</h4>

                            <ul type='none'>
                                <li>{t('services.ul.li_1')}</li>
                                <li>{t('services.ul.li_2')}</li>
                                <li>{t('services.ul.li_3')}</li>
                                <li>{t('services.ul.li_4')}</li>
                            </ul>

                            <Link href={'/services/single'} className='services_right_btn'>
                                <p>{t('services.item_btn')}</p>
                                <FaCircleArrowRight className='services_btn_icon' />
                            </Link>
                        </div>

                        <div className='services_right_item'>
                            <h2>{t('services.item_2.title_1')} <br /> {t('services.item_2.title_2')}</h2>
                            <h4>{t('services.item_desc')}</h4>


                            <ul type='none'>
                                <li>{t('services.ul.li_1')}</li>
                                <li>{t('services.ul.li_2')}</li>
                                <li>{t('services.ul.li_3')}</li>
                                <li>{t('services.ul.li_4')}</li>
                            </ul>

                            <Link href={'/services/single'} className='services_right_btn'>
                                <p>{t('services.item_btn')}</p>
                                <FaCircleArrowRight className='services_btn_icon' />
                            </Link>
                        </div>
                    </div>


                    <div className='service_right_down'>
                        <div className='services_right_item'>
                            <h2>{t('services.item_3.title_1')} <br /> {t('services.item_3.title_2')}</h2>
                            <h4>{t('services.item_desc')}</h4>


                            <ul type='none'>
                                <li>{t('services.ul.li_1')}</li>
                                <li>{t('services.ul.li_2')}</li>
                                <li>{t('services.ul.li_3')}</li>
                                <li>{t('services.ul.li_4')}</li>
                            </ul>

                            <Link href={'/services/single'} className='services_right_btn'>
                                <p>{t('services.item_btn')}</p>
                                <FaCircleArrowRight className='services_btn_icon' />
                            </Link>
                        </div>

                        <div className='services_right_item'>
                            <h2>{t('services.item_4.title_1')} <br /> {t('services.item_4.title_2')}</h2>
                            <h4>{t('services.item_desc')}</h4>


                            <ul type='none'>
                                <li>{t('services.ul.li_1')}</li>
                                <li>{t('services.ul.li_2')}</li>
                                <li>{t('services.ul.li_3')}</li>
                                <li>{t('services.ul.li_4')}</li>
                            </ul>

                            <Link href={'/services/single'} className='services_right_btn'>
                                <p>{t('services.item_btn')}</p>
                                <FaCircleArrowRight className='services_btn_icon' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='services_down'>
                <div className='service_down_position'>
                    <p>{t('services.down.text')}</p>
                    <span></span>
                </div>

                <h2>
                    {t('services.down.title.1')} <span>{t('services.down.title.2')}</span> <br />
                    {t('services.down.title.3')} <span>{t('services.down.title.4')}</span>
                </h2>

                <Link href={'/contact'} className='services_down_btn'>
                    <p>{t('services.down.btn')}</p>
                    <FaCircleArrowRight className='services_down_btn_icon' />
                </Link>
            </div>

        </main>
    )
}

export default page

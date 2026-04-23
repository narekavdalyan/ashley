'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { PersonalDodecahedron } from '../components/dodechedron/newBackground';
import SideLabel2 from '../components/sideLabel2/SideLabel2';
import { useTranslation } from 'react-i18next';


const page = () => {

    const {t, i18n} = useTranslation();
    const section1Ref = useRef(null);

    return (
        <div className='grid_2_all'>
            <PersonalDodecahedron />
            <div ref={section1Ref} id='home_1_section' className='grid_2_up'>
                <h1>
                    {t('grid_1.title_1')} <br />
                    {t('grid_1.title_2')}<span>{t('grid_1.title_3')}</span>
                </h1>

                <div onClick={() => { document.getElementById('grid_1_mid').scrollIntoView({ behavior: 'smooth' }) }}>
                    <p>{t('grid_1.up_text')}</p>
                    <FaCircleArrowDown className='grid_2_up_icon' />
                </div>
            </div>

            <SideLabel2 section1Ref={section1Ref} />

            <div id='grid_1_mid' className='grid_1_mid'>
                <div className='grid_1_mid_1'>
                    <div className="grid_1_mid_item">
                        <img width={'100%'} height={'350px'} src='assets/grid_1_1.jpg' alt='grid 1 image'></img>
                        <div className='grid_1_item_desc'>
                            <span>{t('grid_1.item_1.desc')}</span>
                            <p>{t('grid_1.item_1.date')}</p>
                        </div>
                        <h2>{t('grid_1.item_1.title')}</h2>
                    </div>

                    <div className="grid_1_mid_item" style={{ marginTop: '50px' }}>
                        <img width={'100%'} height={'300px'} src='assets/grid_1_4.jpg' alt='grid 1 image'></img>
                        <div className='grid_1_item_desc'>
                            <span>{t('grid_1.item_2.desc')}</span>
                            <p>{t('grid_1.item_2.date')}</p>
                        </div>
                        <h2>{t('grid_1.item_2.title')}</h2>
                    </div>
                </div>

                <div className="grid_1_mid_item">
                    <img width={'100%'} height={'680px'} src='assets/grid_1_2.jpg' alt='grid 1 image'></img>
                    <div className='grid_1_item_desc'>
                        <span>{t('grid_1.item_3.desc')}</span>
                        <p>{t('grid_1.item_3.date')}</p>
                    </div>
                    <h2>{t('grid_1.item_3.title')}</h2>
                </div>


                <div className='grid_1_mid_2'>
                    <div className="grid_1_mid_item">
                        <img width={'500px'} height={'300px'} src='assets/grid_1_5.jpg' alt='grid 1 image' style={{ marginTop: '50px' }}></img>
                        <div className='grid_1_item_desc'>
                            <span>{t('grid_1.item_4.desc')}</span>
                            <p>{t('grid_1.item_4.date')}</p>
                        </div>
                        <h2>{t('grid_1.item_4.title')}</h2>
                    </div>

                    <div className="grid_1_mid_item">
                        <img width={'100%'} height={'350px'} src='assets/grid_1_3.jpg' alt='grid 1 image'></img>
                        <div className='grid_1_item_desc'>
                            <span>{t('grid_1.item_5.desc')}</span>
                            <p>{t('grid_1.item_5.date')}</p>
                        </div>
                        <h2>{t('grid_1.item_5.title')}</h2>
                    </div>

                </div>

                <div className="grid_1_mid_item">
                    <img width={'100%'} height={'680px'} src='assets/grid_1_6.jpg' alt='grid 1 image'></img>
                    <div className='grid_1_item_desc'>
                        <span>{t('grid_1.item_6.desc')}</span>
                        <p>{t('grid_1.item_6.date')}</p>
                    </div>
                    <h2>{t('grid_1.item_6.title')}</h2>
                </div>

            </div>

            <div className='grid_1_down'>
                <div className='grid_1_down_position'>
                    <p>{t('grid_1.down.text')}</p>
                    <span></span>
                </div>

                <h2>
                    {t('grid_1.down.title.1')} <span>{t('grid_1.down.title.2')}</span> {t('grid_1.down.title.3')}<br />
                    {t('grid_1.down.title.4')} <span>{t('grid_1.down.title.5')}</span>
                </h2>

                <Link href={'/contact'} className='grid_1_down_link'>
                    <p>{t('grid_1.down.btn')}</p>
                    <FaCircleArrowRight className='grid_1_down_icon' />
                </Link>
            </div>
        </div>
    )
}

export default page

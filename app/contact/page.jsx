'use client'

import React, { useRef } from 'react'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import SideLabel2 from '../components/sideLabel2/SideLabel2';
import { useTranslation } from 'react-i18next';


const page = () => {
    const {t, i18n} = useTranslation();

    const section1Ref = useRef(null);

    return (
        <div className='contact_all'>
            <div ref={section1Ref} id='home_1_section' className='contact_up'>
                <h1>{t('contact.title')}</h1>
                <button onClick={() => {
                    document.getElementById('contact_body').scrollIntoView({behavior:"smooth"})
                }}>
                    <p>{t('contact.up_btn')}</p>
                    <FaCircleArrowDown className='contact_icon' />
                </button>
            </div>

            <div style={{ position: "relative", overflow: "hidden" }}>
                <a href="https://yandex.com/maps/10262/yerevan/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>
                    Ереван
                </a>
                <a href="https://yandex.com/maps/10262/yerevan/?indoorLevel=1&ll=44.565565%2C40.199661&utm_medium=mapframe&utm_source=maps&z=16.63"
                    style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>
                    Ереван — Яндекс Карты
                </a>
                <iframe src="https://yandex.com/map-widget/v1/?indoorLevel=1&ll=44.565565%2C40.199661&z=16.63"
                    width="100%" height="500" allowFullScreen={true} style={{ position: "relative" }}>
                </iframe>
            </div>
             <SideLabel2 section1Ref={section1Ref} />

            <div id='contact_body' className='contact_down'>
                <h2>{t('contact.down.title_1')} <span>{t('contact.down.title_2')}</span></h2>
                <form action="">
                    <div className='contact_inputs_div'>
                        <input type="text" placeholder={t('contact.down.placeholder_1')} />
                        <input type="email" placeholder={t('contact.down.placeholder_2')} />
                    </div>

                    <textarea name="message" placeholder={t('contact.down.placeholder_3')}></textarea>
                    <div className='contact_btn_div'>
                        <p><span>*</span> {t('contact.down.text')}</p>
                        <button type="submit">
                            <p>{t('contact.down.btn')}</p>
                            <FaCircleArrowRight className='contact_icon' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page

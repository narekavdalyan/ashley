'use client'

import React, { useRef } from 'react'
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import { PersonalDodecahedron } from '../components/dodechedron/newBackground';
import Link from 'next/link';
import SideLabel2 from '../components/sideLabel2/SideLabel2';
import { useTranslation } from 'react-i18next';


const page = () => {
    const { t, i18n } = useTranslation();

    const team_1 = [
        {
            id: 1,
            name:  `${t('team.team_1.card_1.name')}`,
            profession: `${t('team.team_1.card_1.profession')}`,
            src: 'assets/home_4_1.png'
        },
        {
            id: 2,
            name: `${t('team.team_1.card_2.name')}`,
            profession: `${t('team.team_1.card_2.profession')}`,
            src: 'assets/home_4_2.png'
        },
        {
            id: 3,
            name: `${t('team.team_1.card_3.name')}`,
            profession: `${t('team.team_1.card_3.profession')}`,
            src: 'assets/home_4_3.png'
        },
        {
            id: 4,
            name: `${t('team.team_1.card_4.name')}`,
            profession: `${t('team.team_1.card_4.profession')}`,
            src: 'assets/home_4_4.png'
        }
    ];
    const team_2 = [
        {
            id: 1,
            name: `${t('team.team_2.card_1.name')}`,
            profession: `${t('team.team_2.card_1.profession')}`,
            src: 'assets/team_5.jpg'
        },
        {
            id: 2,
            name: `${t('team.team_2.card_2.name')}`,
            profession: `${t('team.team_2.card_2.profession')}`,
            src: 'assets/team_6.jpg'
        },
        {
            id: 3,
            name: `${t('team.team_2.card_3.name')}`,
            profession: `${t('team.team_2.card_3.profession')}`,
            src: 'assets/team_7.jpg'
        },
        {
            id: 4,
            name: `${t('team.team_2.card_4.name')}`,
            profession: `${t('team.team_2.card_4.profession')}`,
            src: 'assets/team_8.jpg'
        }
    ];

    const section1Ref = useRef(null)

    return (
        <div className='team_all'>
            <PersonalDodecahedron />
            <div ref={section1Ref} id='home_1_section' className='team_up'>
                <h1>
                    {t('team.title.1')} <span> {t('team.title.2')}</span> <br />
                    {t('team.title.3')} <span> {t('team.title.4')}</span>
                </h1>

                <button>
                    <p> {t('team.up_btn')}</p>
                    <FaCircleArrowDown className='team_up_icon' />
                </button>
            </div>
            <SideLabel2 section1Ref={section1Ref} />

            <div className="team_mid">
                <div className='team_mid_box'>
                    {
                        team_1.map((card) => (
                            <div className="h_4_img_div" key={card.id}>
                                <img src={card.src} alt="" width={'100%'} height={'100%'} />
                                <div className="h_4_img_hover_div">
                                    <Link
                                        href={'/personal'}
                                        className='team_card_name'
                                    >{card.name}</Link>
                                    <h3>{card.profession}</h3>
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

                <div className='team_mid_box'>
                    {
                        team_2.map((card) => (
                            <div className="h_4_img_div" key={card.id}>
                                <img src={card.src} alt="" width={'100%'} height={'100%'} />
                                <div className="h_4_img_hover_div">
                                    <h2>{card.name}</h2>
                                    <h3>{card.profession}</h3>
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

            <div className='team_down'>
                <div className='team_down_position'>
                    <p>{t('team.down.up_text')}</p>
                    <span></span>
                </div>

                <h2>
                    {t('team.down.title.1')} <span>{t('team.down.title.2')}</span> {t('team.down.title.3')}<br />
                    {t('team.down.title.4')} <span>{t('team.down.title.5')}</span>
                </h2>

                <Link href={'/contact'} className='team_link'>
                    <p>{t('team.down.btn')}</p>
                    <FaCircleArrowRight className='team_down_icon' />
                </Link>
            </div>

        </div>
    )
}

export default page

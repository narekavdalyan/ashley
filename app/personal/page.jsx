'use client'

import Dodechedron from "../components/dodechedron/newBackground";
import { PersonalDodecahedron } from "../components/dodechedron/newBackground";
import React from 'react'
import Link from "next/link";

import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


const page = () => {
    const {t, i18n} = useTranslation();
    return (
        <main className="personal_all">
            <PersonalDodecahedron />

            <div className="personal_body">
                <div className="personal_body_head">
                    <p>{t('personal.up_text')}</p>
                    <h1>{t('personal.name')} <br /> {t('personal.surname')}</h1>
                </div>

                <div className="personal_img"></div>

                <div className="personal_position">
                    <p>{t('personal.down_text')}</p>

                    <div className="personal_actions">

                        <div className='personal_social'>
                            <FaBehance className='personal_social_icon' />
                            <FaDribbble className='personal_social_icon' />
                            <FaTwitter className='personal_social_icon' />
                            <FaGithub className='personal_social_icon' />
                        </div>

                        <button className="personal_portfolio_btn">
                            <Link href={'/slider'}><div>{t('personal.btn')}</div></Link>
                            <div> <FaCircleArrowRight className="head_arrow_icon" /></div>
                        </button>
                    </div>
                </div>
            </div>



        </main>
    )
}

export default page

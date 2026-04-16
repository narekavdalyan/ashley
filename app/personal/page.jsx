
import Dodechedron from "../components/dodechedron/newBackground";
import { PersonalDodecahedron } from "../components/dodechedron/newBackground";
import React from 'react'
import Link from "next/link";

import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";


const page = () => {
    return (
        <main className="personal_all">
            <PersonalDodecahedron />

            <div className="personal_body">
                <div className="personal_body_head">
                    <p>Hello! My name is</p>
                    <h1>Ashley <br /> Goodman</h1>
                </div>

                <div className="personal_img"></div>

                <div className="personal_position">
                    <p>Designing a Better World Today</p>

                    <div className="personal_actions">

                        <div className='personal_social'>
                            <FaBehance className='personal_social_icon' />
                            <FaDribbble className='personal_social_icon' />
                            <FaTwitter className='personal_social_icon' />
                            <FaGithub className='personal_social_icon' />
                        </div>

                        <button className="personal_portfolio_btn">
                            <Link href={'/slider'}><div>VIEW PORTFOLIO</div></Link>
                            <div> <FaCircleArrowRight className="head_arrow_icon" /></div>
                        </button>
                    </div>
                </div>
            </div>



        </main>
    )
}

export default page

'use client'

import React, { useRef } from 'react'
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import SideLabel2 from '../components/sideLabel2/SideLabel2';


const page = () => {

    const section1Ref = useRef(null);

    return (
        <div className='contact_all'>
            <div ref={section1Ref} id='home_1_section' className='contact_up'>
                <h1>Get in touch</h1>
                <button>
                    <p>SEND MESSAGE</p>
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

            <div className='contact_down'>
                <h2>Let's <span>Talk</span></h2>
                <form action="">
                    <div className='contact_inputs_div'>
                        <input type="text" placeholder="WHAT'S YOUR NAME" />
                        <input type="email" placeholder='YOUR EMAIL' />
                    </div>

                    <textarea name="message" placeholder="TELL US ABOUT YOUR PROJECT"></textarea>
                    <div className='contact_btn_div'>
                        <p><span>*</span> We promise not to disclose your personal information to third parties.</p>
                        <button type="submit">
                            <p>SEND MESSAGE</p>
                            <FaCircleArrowRight className='contact_icon' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page

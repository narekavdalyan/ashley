'use client'

import React from 'react'
import './style.css'
import Link from 'next/link'
import { FaCircleArrowRight } from "react-icons/fa6";


const ContactBox = () => {
    return (
        <div>
            <div className='contact_box_down'>
                <div className='contact_box_down_position'>
                    <p>Looking to make your mark? We'll help you turn yourr project into a success sotry.</p>
                    <span></span>
                </div>

                <h2>
                    Ready to bring your <span>ideas</span> to life?<br />
                    We're <span>here to help</span>
                </h2>

                <Link href={'/contact'} className='contact_box_down_link'>
                    <p>CONTACT US</p>
                    <FaCircleArrowRight className='contact_box_down_icon' />
                </Link>
            </div>
        </div>
    )
}

export default ContactBox

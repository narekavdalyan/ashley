'use client'

import React from 'react'
import './SideLabel2.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const SideLabel2 = ({ section1Ref }) => {

    const [showScrollTop, setShowScrollTop] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (!section1Ref || !section1Ref.current) return

            const rect = section1Ref.current.getBoundingClientRect();

            if (rect.bottom <= 0) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }

        }

        handleScroll()

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [section1Ref])

    return (
        <div
            onClick={() => {
                document.getElementById('home_1_section').scrollIntoView({ behavior: 'smooth' })
            }} className={`scroll_to_top_position ${showScrollTop ? 'show' : 'hide'}`}>
            <p>BACK TO TOP</p>
            <BsFillArrowRightCircleFill className="scroll_top_arrow_icon" />
        </div>
    )
}

export default SideLabel2

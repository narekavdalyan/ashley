'use client'

import React from 'react'
import './style.css'
import { usePathname } from 'next/navigation'

const SideLabel = () => {
    const pathname = usePathname()

    const getLabel = () => {
        switch (pathname) {
            case '/':
                return 'HOMEPAGE'
            case '/services':
                return 'SERVICES'
            case '/portfolio':
                return 'PORTFOLIO'
            case '/contact':
                return 'CONTACT'
            case '/newsletter':
                return 'NEWSLETTER'
            case '/personal':
                return 'PERSONAL'
            case '/services/single':
                return 'SERVICES'
            case '/publication':
                return 'NEWSLWTTER'
            case '/grid-1':
                return 'PORTFOLIO'
            default:
                return 'DEFAULT'
        }
    }


    return (
        <div>
            <div className="home_left_position">{getLabel()}</div>
        </div>
    )
}

export default SideLabel

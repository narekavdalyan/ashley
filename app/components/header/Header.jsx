'use client'
import React, { useState } from 'react'
import './style.css'
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Header = () => {

    const { t, i18n } = useTranslation()
    const [isClicked, setIsClicked] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [childOpenId, setChildOpenId] = useState();
    const [isHoveredId, setIsHoveredId] = useState(0);
    const [activeId, setActiveId] = useState();
    const menuItems = [
        {
            id: 1,
            title: t('menu.homepage'),
            children: [
                { title: t('menu.landing'), href: '/' },
                { title: t('menu.personal'), href: '/personal' },
                { title: t('menu.portfolio_slider'), href: '/slider' }
            ]
        },
        {
            id: 2,
            title: t('menu.portfolio'),
            children: [
                { title: t('menu.grid1'), href: '/grid-1' },
                { title: t('menu.grid2'), href: '/grid-2' },
                { title: t('menu.slider'), href: '/slider' }
            ]
        },
        {
            id: 3,
            title: t('menu.services'),
            children: [
                { title: t('menu.services_list'), href: '/services' },
                { title: t('menu.single_service'), href: '/services/single' }
            ]
        },
        {
            id: 4,
            title: t('menu.newsletter'),
            children: [
                { title: t('menu.blog'), href: '/blog' },
                { title: t('menu.publication'), href: '/publication' }
            ]
        },
        {
            id: 5,
            title: t('menu.other'),
            children: [
                { title: t('menu.team'), href: '/team' },
                { title: t('menu.contact'), href: '/contact' },
                { title: t('menu.not_found'), href: '/page-404' }
            ]
        }
    ];

    return (
        <div className={`header_all ${isMenuOpen && 'mobile_menu'}`}>
            <div className='header_up'>
                <Link href={'/'} className='header_left_logo'>A.</Link>
                <div className='header_menu_logo'>

                    <div onClick={() => {
                        setIsClicked(!isClicked);
                        setIsMenuOpen(!isMenuOpen);
                    }}>
                        {isClicked ? <IoClose /> : <HiMenuAlt2 />}
                    </div>

                    <header>
                        <button onClick={() => i18n.changeLanguage('en')}>
                            <svg viewBox="0 0 19 10" width="30" height="20">
                                <rect width="19" height="10" fill="#B22234" />
                                <g fill="#FFFFFF">
                                    <rect y="1" width="19" height="1" />
                                    <rect y="3" width="19" height="1" />
                                    <rect y="5" width="19" height="1" />
                                    <rect y="7" width="19" height="1" />
                                    <rect y="9" width="19" height="1" />
                                </g>
                                <rect width="8" height="5" fill="#3C3B6E" />
                            </svg>
                        </button>

                        <button onClick={() => i18n.changeLanguage('ru')}>
                            <svg viewBox="0 0 3 2" width="30" height="20">
                                <rect width="3" height="2" fill="#FFFFFF" />
                                <rect width="3" height="1.33" y="0.67" fill="#0033A0" />
                                <rect width="3" height="0.67" y="1.33" fill="#D52B1E" />
                            </svg>
                        </button>

                        <button onClick={() => i18n.changeLanguage('hy')}>
                            <svg viewBox="0 0 3 2" width="30" height="20">
                                <rect width="3" height="2" fill="#D90012" />
                                <rect width="3" height="1.33" y="0.67" fill="#0033A0" />
                                <rect width="3" height="0.67" y="1.33" fill="#F2A800" />
                            </svg>
                        </button>
                    </header>
                </div>


            </div>

            {isMenuOpen && <div className='header_down'>
                {
                    menuItems.map((item) => (
                        <div
                            className='header_down_item'
                            key={item.id}
                            onMouseEnter={() => { setIsHoveredId(item.id) }}
                        >

                            <div className='header_title_all'
                                onClick={() => {
                                    setActiveId(item.id);
                                }}>

                                {isHoveredId === item.id &&
                                    <div className='header_hovered'
                                        style={{ backgroundColor: activeId === item.id ? 'orange' : 'white' }}
                                    ></div>}

                                <div
                                    className='header_title_text'

                                    onClick={() => {
                                        setChildOpenId(item.id)
                                    }}>
                                    {item.title}
                                </div>
                            </div>


                            {
                                childOpenId === item.id &&
                                <div className='header_child_div'>
                                    {
                                        item.children.map((child, index) => (
                                            <Link
                                                href={child.href}
                                                key={index}
                                                className='header_title_child'
                                                onClick={() => {
                                                    setIsMenuOpen(false)
                                                    setIsClicked(false)
                                                }}
                                            >
                                                {child.title}
                                            </Link>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    ))
                }
            </div>}
        </div>
    )
}

export default Header;

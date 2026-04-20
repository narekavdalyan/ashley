'use client'
import React, { useState } from 'react'
import './style.css'
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';


const Header = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [childOpenId, setChildOpenId] = useState();
    const [isHoveredId, setIsHoveredId] = useState(0);
    const [activeId, setActiveId] = useState();

    const menuItems = [
        {
            id: 1,
            title: 'Homepage',
            children: [
                {
                    title: 'LANDING PAGE',
                    href: '/',
                },
                {
                    title: 'PERSONAL',
                    href: '/personal'
                },
                {
                    title: 'PORTFOLIO SLIDER',
                    href: '/slider'
                }
            ]
        },
        {
            id: 2,
            title: 'Portfolio',
            children: [
                {
                    title: 'GRID TYPE 1',
                    href: '/grid-1'
                },
                {
                    title: 'GRID TYPE 2',
                    href: '/grid-2'
                },
                {
                    title: 'SLIDER',
                    href: '/slider'
                }
            ]
        },
        {
            id: 3,
            title: 'Services',
            children: [
                {
                    title: 'SERVICES LIST',
                    href: '/services'
                },
                {
                    title: 'SINGLE SERVICE',
                    href: '/services/single'
                }
            ]
        },
        {
            id: 4,
            title: 'Newsletter',
            children: [
                {
                    title: 'BLOG LIST',
                    href: '/blog'
                },
                {
                    title: 'PUBLICATION',
                    href: '/publication'
                }
            ]
        },
        {
            id: 5,
            title: 'Other pages',
            children: [
                {
                    title: 'TEAM',
                    href: '/team'
                },
                {
                    title: 'CONTACT',
                    href: '/contact'
                },
                {
                    title: '404',
                    href: '/page-404'
                }
            ]
        }
    ];


    return (
        <div className={`header_all ${isMenuOpen && 'mobile_menu'}`}>
            <div className='header_up'>
                <Link href={'/'} className='header_left_logo'>A.</Link>
                <div className='header_menu_logo'
                    onClick={() => {
                        setIsClicked(!isClicked);
                        setIsMenuOpen(!isMenuOpen);
                    }}>
                    {isClicked ? <IoClose /> : <HiMenuAlt2 />}
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

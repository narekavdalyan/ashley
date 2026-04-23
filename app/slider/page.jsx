'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { PersonalDodecahedron } from '../components/dodechedron/newBackground';
import { useTranslation } from 'react-i18next';


const Page = () => {

    const { t, i18n } = useTranslation();

    const originalItems = [
        {
            id: 1,
            src: 'assets/grid_1_2.jpg',
            category: `${t('slider.category')}`,
            date: `${t('slider.date')}`,
            title: `${t('slider.title_1')}`,
            btn_text: `${t('slider.btn_text')}`
        },
        {
            id: 2,
            src: 'assets/grid_1_4.jpg',
            category: `${t('slider.category')}`,
            date: `${t('slider.date')}`,
            title: `${t('slider.title_2')}`,
            btn_text: `${t('slider.btn_text')}`
        },
        {
            id: 3,
            src: 'assets/grid_1_5.jpg',
            category: `${t('slider.category')}`,
            date: `${t('slider.date')}`,
            title: `${t('slider.title_3')}`,
            btn_text: `${t('slider.btn_text')}`
        },
        {
            id: 4,
            src: 'assets/grid_1_1.jpg',
            category: `${t('slider.category')}`,
            date: `${t('slider.date')}`,
            title: `${t('slider.title_4')}`,
            btn_text: `${t('slider.btn_text')}`
        },
        {
            id: 5,
            src: 'assets/grid_1_3.jpg',
            category: `${t('slider.category')}`,
            date: `${t('slider.date')}`,
            title: `${t('slider.title_5')}`,
            btn_text: `${t('slider.btn_text')}`
        },
        {
            id: 6,
            src: 'assets/grid_1_6.jpg',
            category: `${t('slider.category')}`,
            date: `${t('slider.date')}`,
            title: `${t('slider.title_6')}`,
            btn_text: `${t('slider.btn_text')}`
        }
    ];
    // Бесконечный массив: последний + оригинальные + первый
    const slider_items = [
        originalItems[originalItems.length - 1],
        ...originalItems,
        originalItems[0]
    ];
    const [position, setPosition] = useState(1);           // начинаем с первого реального слайда
    const [isDragging, setIsDragging] = useState(false);
    const [currentTranslate, setCurrentTranslate] = useState(-730);

    const prevTranslateRef = useRef(-730);
    const startXRef = useRef(0);
    const autoIntervalRef = useRef(null);
    const isTransitioningRef = useRef(false);

    const slideWidth = 730;
    const totalSlides = originalItems.length;

    // Автопрокрутка
    const startAutoSlide = () => {
        if (autoIntervalRef.current) clearInterval(autoIntervalRef.current);
        autoIntervalRef.current = setInterval(() => {
            if (!isTransitioningRef.current) nextSlide();
        }, 3000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(autoIntervalRef.current);
    }, []);

    const handleMouseEnter = () => clearInterval(autoIntervalRef.current);
    const handleMouseLeave = () => startAutoSlide();

    const nextSlide = () => {
        if (isTransitioningRef.current) return;
        isTransitioningRef.current = true;

        const newPosition = position + 1;
        const newTranslate = -newPosition * slideWidth;

        setPosition(newPosition);
        setCurrentTranslate(newTranslate);
        prevTranslateRef.current = newTranslate;

        setTimeout(() => {
            if (newPosition === totalSlides + 1) {
                setPosition(1);
                setCurrentTranslate(-slideWidth);
                prevTranslateRef.current = -slideWidth;
            }
            isTransitioningRef.current = false;
        }, 450);
    };

    // Предыдущий слайд
    const prevSlide = () => {
        if (isTransitioningRef.current) return;
        isTransitioningRef.current = true;

        const newPosition = position - 1;
        const newTranslate = -newPosition * slideWidth;

        setPosition(newPosition);
        setCurrentTranslate(newTranslate);
        prevTranslateRef.current = newTranslate;

        setTimeout(() => {
            if (newPosition === 0) {
                setPosition(totalSlides);
                setCurrentTranslate(-totalSlides * slideWidth);
                prevTranslateRef.current = -totalSlides * slideWidth;
            }
            isTransitioningRef.current = false;
        }, 450);
    };

    // Drag & Touch
    const handleStart = (clientX) => {
        if (isTransitioningRef.current) return;
        setIsDragging(true);
        startXRef.current = clientX;
        prevTranslateRef.current = currentTranslate;
    };

    const handleMove = (clientX) => {
        if (!isDragging || isTransitioningRef.current) return;
        const diff = clientX - startXRef.current;
        setCurrentTranslate(prevTranslateRef.current + diff);
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const movedBy = currentTranslate - prevTranslateRef.current;

        if (movedBy < -100) {
            nextSlide();
        } else if (movedBy > 100) {
            prevSlide();
        } else {
            // возврат назад
            setCurrentTranslate(-position * slideWidth);
            prevTranslateRef.current = -position * slideWidth;
        }
    };

    // Получаем текущий реальный слайд (защита от undefined)
    const currentItem = originalItems[(position - 1 + totalSlides) % totalSlides];

    return (
        <div
            className='slider_all'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <PersonalDodecahedron />

            <div className="slider_up">
                <div
                    className='wrapper'
                    onMouseDown={(e) => handleStart(e.clientX)}
                    onMouseMove={(e) => handleMove(e.clientX)}
                    onMouseUp={handleEnd}
                    onMouseLeave={handleEnd}
                    onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                    onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                    onTouchEnd={handleEnd}
                >
                    <div
                        className="slider"
                        style={{
                            transform: `translateX(${currentTranslate}px)`,
                            transition: isDragging ? 'none' : 'transform 0.45s ease',
                            display: 'flex',
                            gap: '30px'
                        }}
                    >
                        {slider_items.map((item, index) => (
                            <div key={index} style={{ minWidth: '700px', maxHeight: '400px', flexShrink: 0 }}>
                                <img
                                    width={700}
                                    height={370}
                                    src={item.src}
                                    alt={item.title}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="slider_down">
                <div className='slider_down_left'>
                    <div className='slider_down_left_1'>
                        <p>
                            <span>{currentItem.category}</span> {currentItem.date}
                        </p>
                        <h3>{currentItem.title}</h3>
                    </div>

                    <button>
                        <p>{currentItem.btn_text}</p>
                        <FaCircleArrowRight className='slider_down_left_icon' />
                    </button>
                </div>

                <div className='slider_down_right'>
                    <div className='slider_down_right_buttons'>
                        <p>
                            {((position - 1 + totalSlides) % totalSlides) + 1} / {totalSlides}
                        </p>

                        <div>
                            <FaCircleArrowLeft
                                className='slider_right_icon'
                                onClick={prevSlide}
                            />
                            <FaCircleArrowRight
                                className='slider_right_icon'
                                onClick={nextSlide}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Page;
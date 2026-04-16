'use client'
import './FirstLoading.css'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function FirstLoading({ children }) {

    const [firstLoading, setFirstLoading] = useState(true);
    const [showAshley, setShowAshley] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFirstLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAshley(true)
        }, 2000);

        return () => clearTimeout(timer);

    }, []);

    if (firstLoading) {
        return (
            <div className='first_loading_all'>

                {showAshley ?
                    <div className='first_loading_2'>
                        <div className='loading_2_animated'></div>
                        <div className='loading_2_text'>ashley.com</div>
                    </div> :

                    <div className='first_loading_1'>
                        <div className='animation_1'>Pioneering</div>
                        <span className='animation_2'>Creative</span>
                        <div className='animation_3'>Excellence</div>
                    </div>}
            </div>
        )
    } else {
        return children
    }



}
import { useRef, useState } from 'react';
import './style.css';

export default function DragSlider() {
    const trackRef = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const startDrag = (e) => {
        setIsDown(true);
        const x = e.pageX || e.touches[0].pageX;
        setStartX(x);
        setScrollLeft(trackRef.current.scrollLeft);
    };

    const stopDrag = () => {
        setIsDown(false);
    };

    const onMove = (e) => {
        if (!isDown) return;

        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX) * 1.25;

        trackRef.current.scrollLeft = scrollLeft - walk;
    };

    const slides = [
        {
            id: 1,
            img: 'assets/grid_1_2.jpg'
        },
        {
            id: 2,
            img: 'assets/grid_1_4.jpg'
        },
        {
            id: 3,
            img: 'assets/grid_1_6.jpg'
        },
        {
            id: 4,
            img: 'assets/grid_1_5.jpg'
        }
    ]

    return (
        <div
            className="sliderWrapper"
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onMouseMove={onMove}
            onTouchEnd={stopDrag}
            onTouchMove={onMove}
        >
            <div
                className="sliderTrack"
                ref={trackRef}
                onMouseDown={startDrag}
                onTouchStart={startDrag}
            >
                {slides.map((slide) => (
                    <div className="slide" key={slide.id}>
                        <img src={slide.img}  alt="Slide Image" width={1100} height={500} />
                    </div>
                ))}
            </div>
        </div>
    );
}
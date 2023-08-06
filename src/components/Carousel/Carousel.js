import { useState } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { AiOutlinePlus } from "react-icons/ai";
import './Carousel.css';


const Carousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const currentTransform = -activeIndex * (100 / (items.length - 2));

    const isPrevDisabled = activeIndex === 0;
    const isNextDisabled = activeIndex + 3 >= items.length;

    return (
        <div className="carousel-wrapper">
            <div
                className="carousel-items gap-15"
                style={{ transform: `translateX(${currentTransform}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                        {item}
                    </div>
                ))}

            </div>

            <button
                className={`carousel-control prev ${isPrevDisabled ? 'disabled' : ''}`}
                onClick={handlePrev}
                disabled={isPrevDisabled}
            >
                <GrFormPrevious size={35} />
            </button>
            <button
                className={`carousel-control next ${isNextDisabled ? 'disabled' : ''}`}
                onClick={handleNext}
                disabled={isNextDisabled}
            >
                <GrFormNext size={35} />
            </button>
        </div>
    );
};

export default Carousel;
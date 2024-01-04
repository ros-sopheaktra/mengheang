import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import './Style.css';

const ImageSlider = ({ images, slideInterval }) => {
    const [sliders] = useState(images);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = sliders.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, sliders]);

    // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
    useEffect(() => {
        let sliders = setInterval(() => {
            setIndex(index + 1);
        }, slideInterval);
        return () => clearInterval(sliders);
    }, [index]);

    return (
        <section className="section">
            <div className="section-center">
                {sliders.map((slider, sliderIndex) => {
                    const { id, image, name } = slider;
                    let position = "nextSlide";
                    if (sliderIndex === index) {
                        position = "activeSlide";
                    }
                    if (
                        sliderIndex === index - 1 ||
                        (index === 0 && sliderIndex === sliders.length - 1)
                    ) {
                        position = "lastSlide";
                    }
                    return (
                        <article key={id} className={position}>
                            <img src={image} alt={name} className="sliders-img" />
                        </article>
                    );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
};

export default ImageSlider;
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import carouselImage1 from '../assets/images/carousel1.png';
import carouselImage2 from '../assets/images/carousel2.png';
import carouselImage3 from '../assets/images/carousel3.png';
import carouselImage4 from '../assets/images/carousel4.png';
import { Button } from '../shared/ui/Button/Button';

type Slide = {
    id: number;
    image: string;
};

const slides: Slide[] = [
    { id: 1, image: carouselImage1 },
    { id: 2, image: carouselImage2 },
    { id: 3, image: carouselImage3 },
    { id: 4, image: carouselImage4 },
];

const detailsText = [
    '«Компас» - это не сайт, и не просто медиаконтент – это целая экосистема, которая превращает разрозненные усилия в единую систему притяжения и удержания кадров в регионе.',
    'Мы соединяем студента, вуз и компанию на одной цифровой платформе через гибкие стажировки, прозрачное целевое обучение, современное медиа и рейтинг работодателей. И самое главное, проект будет самоокупаемым.',
];

export const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const goTo = (index: number) => {
        const lastIndex = slides.length - 1;
        if (index < 0) index = lastIndex;
        if (index > lastIndex) index = 0;

        setCurrentIndex(index);
        setIsDetailsOpen(false);
    };

    // свайп обработчики
    const handlers = useSwipeable({
        onSwipedLeft: () => goTo(currentIndex + 1),
        onSwipedRight: () => goTo(currentIndex - 1),
        trackMouse: true, // можно и мышкой "таскать"
    });

    return (
        <div className="w-full max-w-xl mx-auto">
            <div {...handlers} className="rounded-md border border-secondary overflow-hidden bg-secondary flex flex-col">
                {/* Слайды */}
                <div className="relative w-full h-64 overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <img key={slide.id} src={slide.image} alt="Слайд" className="w-full h-full object-cover flex-shrink-0" />
                        ))}
                    </div>
                </div>

                {/* Блок "Подробнее" */}
                {isDetailsOpen && (
                    <div
                        className={`p-4 bg-white text-sm transition-all duration-500 ease-in-out
                        ${isDetailsOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}
                    >
                        {detailsText.map((paragraph, idx) => (
                            <p key={idx} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                )}

                {/* Нижняя панель */}
                <div className="bg-white px-6 py-4">
                    {/* Точки */}
                    <div className="flex justify-center mb-4 gap-2">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => goTo(index)}
                                className={`h-1.5 w-1.5 rounded-full mx-1 transition 
                                    ${index === currentIndex ? 'bg-dark-purple' : 'bg-light-purple'}`}
                                aria-label={`Перейти к слайду ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Стрелки и кнопка */}
                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                            onClick={() => goTo(currentIndex - 1)}
                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition
                                border-dark-purple text-dark-purple
                                hover:bg-dark-purple hover:text-white"
                        >
                            <span className="-ml-px -mt-px">&lt;</span>
                        </button>

                        <Button color="red" size="md" className="flex-1" onClick={() => setIsDetailsOpen((prev) => !prev)}>
                            Подробнее
                        </Button>

                        <button
                            type="button"
                            onClick={() => goTo(currentIndex + 1)}
                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition
                                border-dark-purple text-dark-purple
                                hover:bg-dark-purple hover:text-white"
                        >
                            <span className="ml-px -mt-px">&gt;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React, { useState } from 'react';

import { Button } from '../shared/ui/Button/Button';

type Slide = {
    id: number;
    text: string;
};

const slides: Slide[] = [
    { id: 1, text: '"Компас" - Ваш надежный друг на пути к успешному будущему' },
    { id: 2, text: '"Компас" - Ваш надежный друг на пути к успешному будущему' },
    { id: 3, text: '"Компас" - Ваш надежный друг на пути к успешному будущему' },
    { id: 4, text: '"Компас" - Ваш надежный друг на пути к успешному будущему' },
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

    const currentSlide = slides[currentIndex];

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="rounded-md border border-gray-100 overflow-hidden bg-[--color-secondary] flex flex-col transition-all duration-500 ease-in-out">
                {/* Текст слайда */}
                <div className="px-4 py-10 flex-1">
                    <p className="text-base md:text-lg font-medium leading-relaxed">{currentSlide.text}</p>
                </div>

                {/* Блок "Подробнее" */}
                {isDetailsOpen && (
                    <div
                        className={`p-4 bg-white text-sm text-gray-800 transition-all duration-500 ease-in-out
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
                                className={`h-1.5 w-1.5 rounded-full transition 
                  ${index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'}`}
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
                            <span className="-ml-px">&lt;</span>
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
                            <span className="ml-px">&gt;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

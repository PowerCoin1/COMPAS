import React, { useState } from 'react';

import { Button } from '../shared/ui/Button/Button';

type Slide = {
    id: number;
    text: string;
    details: string;
};

// Пока что 3 одинаковых слайда — можно будет заменить текст позже
const slides: Slide[] = [
    {
        id: 1,
        text: '"Компас" - Ваш надежный друг на пути к успешному будущему',
        details: 'Расширенное описание первого слайда. Здесь будет текст о продукте/сервисе.',
    },
    {
        id: 2,
        text: '"Компас" - Ваш надежный друг на пути к успешному будущему',
        details: 'Текст для второго слайда. Можно рассказать о преимуществах.',
    },
    {
        id: 3,
        text: '"Компас" - Ваш надежный друг на пути к успешному будущему',
        details: 'Текст для третьего слайда. Например, кейс или сценарий использования.',
    },
    {
        id: 3,
        text: '"Компас" - Ваш надежный друг на пути к успешному будущему',
        details: 'Текст для третьего слайда. Например, кейс или сценарий использования.',
    },
];

export const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const goTo = (index: number) => {
        const lastIndex = slides.length - 1;
        if (index < 0) index = lastIndex;
        if (index > lastIndex) index = 0;

        setCurrentIndex(index);
        setIsDetailsOpen(false); // при смене слайда сворачиваем "Подробнее"
    };

    const currentSlide = slides[currentIndex];

    return (
        <div className="w-full max-w-xl mx-auto">
            {/* Карточка с текстом и нижней панелью */}
            <div className="rounded-md border border-gray-100 overflow-hidden bg-[--color-secondary] flex flex-col">
                {/* Текст слайда */}
                <div className="px-8 py-10 flex-1 flex items-center">
                    <p className="text-base h4 md:text-lg font-medium text-gray-900 leading-relaxed">{currentSlide.text}</p>
                </div>

                {/* Нижняя панель: точки, стрелки, кнопка */}
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

                    {/* Стрелки и кнопка "Подробнее" */}
                    <div className="flex items-center gap-4">
                        {/* Левая стрелка */}
                        <button
                            type="button"
                            onClick={() => goTo(currentIndex - 1)}
                            className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition
                    border-dark-purple text-dark-purple
                    hover:bg-dark-purple hover:text-white"
                        >
                            <span className="-ml-px -mt-px">&lt;</span>
                        </button>

                        {/* Кнопка Подробнее (Button) */}
                        <Button color="red" size="md" className="flex-1" onClick={() => setIsDetailsOpen((prev) => !prev)}>
                            Подробнее
                        </Button>

                        {/* Правая стрелка */}
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
            {isDetailsOpen && (
                <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-white text-sm text-gray-800">{currentSlide.details}</div>
            )}
        </div>
    );
};

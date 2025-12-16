import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BurgerBottomIcon } from '../../assets/icons/BurgerBottomIcon';
import { BurgerStar } from '../../assets/icons/BurgerStar';
import { BurgerTopCompas } from '../../assets/icons/BurgerTopCompas';
import LogoEmblem from '../../assets/images/Logo-emblem1.png';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { title: 'Вакансии', path: '/vacancies' },
        { title: 'Стажировки', path: '/internships' },
        {
            title: (
                <>
                    Программы целевого <br /> обучения
                </>
            ),
            path: '/programs',
        },
        { title: 'Статистика', path: '/stats' },
        { title: 'Помощь в трудоустройстве ветеранам СВО', path: '/help' },
    ];

    const handleItemClick = (index: number) => {
        setActiveIndex(index);
        setTimeout(onClose, 150);
    };

    return (
        <div
            className={`
                fixed inset-0 z-100 
                ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
            `}
        >
            {/*ФОН (ОВЕРЛЕЙ)*/}
            <div
                className={`
                    absolute inset-0
                    bg-[rgba(255,255,255,0.01)]
                    backdrop-blur-xs
                    transition-all duration-300
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
                onClick={onClose}
            />

            {/*ВЫДВИЖНОЕ МЕНЮ*/}
            <div
                className={`
                                    max-w-[390px]
                mx-auto
                    fixed left-0 top-5
                    h-[calc(100vh-40px)]
                    w-[calc(100vw-16px)] min-w-93.5                   
                    bg-white 
                    ${isOpen ? 'shadow-2xl' : 'shadow-none'}                   
                    border-y border-r border-[#eeebf4] border-l-0
                    rounded-r-lg
                    flex flex-col
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                {/* Логотип */}
                <BurgerTopCompas className="absolute left-5" />

                {/* Крестик */}
                <button
                    onClick={onClose}
                    className="absolute top-10 right-5 p-2 hover:bg-gray-100 rounded-full transition-colors z-10 focus:outline-none"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Контент */}
                <div className="mt-50 px-6 h-full overflow-y-auto">
                    <nav>
                        <ul className="flex flex-col">
                            {menuItems.map((item, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <li
                                        key={index}
                                        className={`
                                            relative
                                            pl-4 pb-[25.5px] pt-[25.5px] last:border-0
                                            ${
                                                isActive
                                                    ? /* Активный: Градиент, белый текст, скругление справа */
                                                      'bg-linear-to-r from-transparent to-[#bb88eb] rounded-r-[50px] '
                                                    : /* Неактивный: Бордер снизу, серый текст */
                                                      'text-gray-800 border-b border-transparent [border-image:linear-gradient(90deg,#bb88eb_0%,rgba(187,136,235,0)_100%)_1]'
                                            }
                                        `}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={() => {
                                                // Предотвращаем мгновенный переход, чтобы обновить стейт
                                                handleItemClick(index);
                                            }}
                                            className={`
                                                flex items-center justify-between w-full
                                                text-[20px] font-medium 
                                                transition-colors 
                                                outline-none  hover:text-[#8c64d8] focus:text-[#8c64d8]
                                            `}
                                        >
                                            {/* Текст ссылки */}
                                            <span>{item.title}</span>

                                            {/* Иконка (Плюсик), только если активен */}
                                            {isActive && (
                                                <div className="mr-8">
                                                    <BurgerStar />
                                                </div>
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <img src={LogoEmblem} alt="Эмблема" className="absolute right-0 top-1/2 -translate-y-1/2" />
                {/* Нижняя иконка*/}
                <BurgerBottomIcon className="absolute bottom-0 left-1/2 -translate-x-1/2" />
            </div>
        </div>
    );
};

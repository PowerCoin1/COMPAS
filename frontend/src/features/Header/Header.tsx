import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BurgerIcon } from '../../assets/icons/BurgerIcon';
import { MainLogo } from '../../assets/icons/MainLogo';
import { UserIcon } from '../../assets/icons/UserIcon';
import LogoEmblem from '../../assets/images/Logo-emblem.webp';
import { MobileMenu } from '../../components/MobileMenu';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header
                className="
                max-w-97.5
                mx-auto
                sticky 
                top-8   
                z-50        
                mt-8    
                   
                mb-4  

                flex items-center justify-between
                box-border
                h-12    
                px-5 py-2            
                border border-secondary
                rounded-lg
                bg-white
            "
            >
                <button
                    className="flex items-center justify-center text-[#26222B] hover:text-gray-600 transition-colors cursor-pointer"
                    onClick={toggleMenu}
                >
                    <BurgerIcon />
                </button>

                <div className="flex items-center justify-between w-38.25 h-8">
                    <Link to="/" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                        <MainLogo />
                    </Link>

                    <span className="text-[20px] font-semibold text-gray-900 leading-none">Компас</span>

                    <img src={LogoEmblem} alt="Эмблема" className="w-8 h-8 object-contain" />
                </div>

                <Link to="/login" className="flex items-center justify-center p-1 text-gray-700 hover:opacity-80 transition-opacity">
                    <UserIcon />
                </Link>
            </header>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

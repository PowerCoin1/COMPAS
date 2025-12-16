import About from '../../components/About';
import { Carousel } from '../../components/Carousel';

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Carousel />
            <About />
        </div>
    );
};

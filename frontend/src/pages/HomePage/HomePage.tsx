import About from '../../components/About';
import { Accordion } from '../../components/Accordion';
import { Carousel } from '../../components/Carousel';
import { FormCard } from '../../features/FormCard/FormCard';

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-primary mb-5">
            <Carousel />
            <About />
            <Accordion />
            <FormCard />
        </div>
    );
};

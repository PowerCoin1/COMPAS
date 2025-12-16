import About from '../../components/About';
import { Accordion } from '../../components/Accordion';

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <About />
            <Accordion />
        </div>
    );
};

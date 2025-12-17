import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './features/MainLayout';
import { AssistancePage } from './pages/AssistancePage';
import { HomePage } from './pages/HomePage';
import { InternshipPage } from './pages/IntershipPage/IntershipPage';
import { LoginPage } from './pages/LoginPage';
import { ProgramPage } from './pages/ProgramPage';
import { VacancyPage } from './pages/VacancyPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/program" element={<ProgramPage />} />
                <Route path="/help" element={<AssistancePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/vacancies" element={<VacancyPage />} />
                <Route path="/internships" element={<InternshipPage />} />
            </Route>
        </Routes>
    );
}

export default App;

import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './features/MainLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
        </Routes>
    );
}

export default App;

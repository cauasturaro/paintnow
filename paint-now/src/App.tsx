// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import CreateGamePage from './pages/CreateGamePAge/CreateGamePage';
import JoinPage from './pages/JoinPage/JoinPage';
import LobbyPage from './pages/LobbyPage/LobbyPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/' 
                    element={<CreateGamePage />} 
                />
                <Route 
                    path='/join/:roomId' 
                    element={<JoinPage />} 
                />
                <Route 
                    path='/lobby/:roomId' 
                    element={<LobbyPage />} 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Error from './pages/Error';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/landing' element={<Landing />} />
                <Route path='/error' element={<Error />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;

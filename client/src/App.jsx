import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Error from './pages/Error';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedLayout from './pages/dashboard/SharedLayout';
import AddJob from './pages/dashboard/AddJob';
import AllJobs from './pages/dashboard/AllJobs';
import Profile from './pages/dashboard/Profile';
import Stats from './pages/dashboard/Stats';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                            <SharedLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path='' element={<Stats />} />
                    <Route path='all-jobs' element={<AllJobs />} />
                    <Route path='add-job' element={<AddJob />} />
                    <Route path='profile' element={<Profile />} />
                </Route>
                <Route path='/register' element={<Register />} />
                <Route path='/landing' element={<Landing />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
